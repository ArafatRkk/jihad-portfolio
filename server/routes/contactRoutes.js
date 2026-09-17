import express from 'express';
import mongoose from 'mongoose';
import { Message, inMemoryMessages } from '../models/Message.js';

const router = express.Router();

const JIHAD_WHATSAPP_NUMBER = '8801981810157';

// POST /api/contact - Submit contact inquiry
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields: name, email, and message.',
      });
    }

    const prefilledText = `Hello Jahidul Islam Jihad,\nMy name is ${name}.\nI visited your portfolio website and would like to connect with you.\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/${JIHAD_WHATSAPP_NUMBER}?text=${encodeURIComponent(prefilledText)}`;

    const messageData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      userAgent: req.headers['user-agent'] || '',
      createdAt: new Date(),
    };

    let savedMessage = null;

    if (mongoose.connection.readyState === 1) {
      try {
        savedMessage = await Message.create(messageData);
      } catch (dbErr) {
        console.warn('[Contact Route] MongoDB write failed, saving in memory:', dbErr.message);
        inMemoryMessages.unshift({ id: Date.now().toString(), ...messageData });
      }
    } else {
      savedMessage = { id: Date.now().toString(), ...messageData };
      inMemoryMessages.unshift(savedMessage);
    }

    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Redirecting to WhatsApp...',
      whatsappUrl,
      data: {
        name: messageData.name,
        email: messageData.email,
        timestamp: messageData.createdAt,
      },
    });
  } catch (err) {
    console.error('[Contact Route Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your message.',
    });
  }
});

// GET /api/contact/messages - Retrieve recent inquiries
router.get('/contact/messages', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
      return res.json({ success: true, count: messages.length, data: messages });
    }
    return res.json({ success: true, count: inMemoryMessages.length, data: inMemoryMessages });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/stats - Engineering Telemetry & Status
router.get('/stats', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected (Atlas)' : 'In-Memory Resilient Mode';
  return res.json({
    success: true,
    system: {
      owner: 'Jahidul Islam Jihad',
      title: 'Electrical Engineering Graduate',
      institution: 'Daffodil Polytechnic Institute',
      completionDate: 'September 2026',
      status: 'Available for Power, Automation & Electrical Engineering Roles',
      database: dbStatus,
      uptimeSeconds: Math.floor(process.uptime()),
      environment: process.env.NODE_ENV || 'development',
    },
  });
});

export default router;

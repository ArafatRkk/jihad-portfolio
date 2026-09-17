# Jahidul Islam Jihad — Electrical Engineering Portfolio (MERN Stack)

A handcrafted personal portfolio website for **Jahidul Islam Jihad**, an **Electrical Engineering Graduate (Diploma in EEE from Daffodil Polytechnic Institute, completed September 2026)**.

The design embodies a high-performance **industrial engineering aesthetic** (Deep Navy `#07111F`, Dark Blue `#0E1B2E`, Electric Blue Accent `#00AEEF`, Cyan Highlights `#36DFFF`, blueprint grids, circuit pulse animations, and custom engineering cursor) without generic templates or clichés.

---

## ⚡ Key Highlights & Features

- **Engineering Hero Presentation**:
  - Right-side framed presentation of Jahidul's formal portrait with technical blueprint HUD brackets, status telemetry, and glowing edge accents.
  - Live EEE status indicators: `DIPLOMA IN ELECTRICAL ENGINEERING`, `COMPLETED SEPT 2026`.
  - Immediate recruiter actions: **"Contact Me"** and **"Download CV"**.
- **About Me Section**:
  - Split layout with portrait integration, credentials, and animated information cards:
    - **Education**: Diploma in EEE, Daffodil Polytechnic Institute (Completed Sept 2026).
    - **Career Interests**: Power Generation & Power Plant, Electrical Maintenance, Industrial Automation, Power Distribution & Transmission, Industrial Electrical Systems.
    - **Strengths**: Quick Learner, Responsible, Adaptable, Team Player, Problem Solver, Continuous Learner.
- **Professional Development Timeline**:
  - Vertical electrical conduit timeline tracking 6 specialized sessions:
    1. *CV Building Session*
    2. *AptiQ Session*
    3. *Art of Living Session*
    4. *Study Abroad Session*
    5. *Robotics Session*
    6. *Electrical Industry Visit Session*
- **Recruiter Contact & WhatsApp Bridge**:
  - Full contact form (Name, Email, Message) with **"Send via WhatsApp"** button.
  - Dynamically routes to `https://wa.me/8801981810157` with prefilled message:
    ```
    Hello Jahidul Islam Jihad,
    My name is [Name].
    I visited your portfolio website and would like to connect with you.
    Message:
    [User Message]
    ```
  - Also records inquiry to backend Express server and MongoDB Atlas!
- **Interactive Engineering Features**:
  - Interactive Canvas electrical circuit background with real-time electron packets.
  - Desktop custom engineering reticle cursor.
  - Top scroll voltage progress bar.
  - EEE oscilloscope bootloader calibration screen.
  - Built-in Digital CV preview modal with **Print / Save as PDF** support.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Lucide Icons, React Icons, Canvas Confetti.
- **Backend**: Node.js, Express.js, Mongoose, CORS, Dotenv.
- **Database**: MongoDB (Atlas ready, with automatic resilient in-memory fallback if URI is not provided).
- **Deployment Ready**:
  - Frontend: Vercel (`vercel.json`) / Netlify (`netlify.toml`)
  - Backend: Render (`render.yaml`) / Railway (`Procfile`)

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18+ or v22+)
- npm

### 1. Install Dependencies
```bash
# In the root directory:
npm run install-all
```
*(Or install separately inside `client` and `server` folders using `npm install`)*

### 2. Start the Backend Server
```bash
cd server
npm start
# Server starts on http://localhost:5000
```
*(Optional: Create `server/.env` with `MONGODB_URI=your_mongodb_atlas_connection_string`)*

### 3. Start the Frontend Application
```bash
cd client
npm run dev
# Frontend starts on http://localhost:5173
```

---

## 🌐 Cloud Deployment Guide

### Frontend (Vercel)
1. Push repository to GitHub.
2. Import project in [Vercel](https://vercel.com).
3. Set **Root Directory** to `client` or use root with `vercel.json` (already configured).
4. Deploy!

### Frontend (Netlify)
1. Import repository in [Netlify](https://netlify.com).
2. The included `netlify.toml` automatically configures the build directory (`client/dist`) and base directory (`client`).

### Backend (Render or Railway)
1. In Render, create a **Web Service** pointing to the repository.
2. Set Root Directory to `server`.
3. Set Build Command to `npm install` and Start Command to `node server.js`.
4. Add Environment Variable `MONGODB_URI` with your MongoDB Atlas connection string.

---

## 👤 Owner & Profile
- **Name**: Jahidul Islam Jihad
- **Title**: Electrical Engineering Graduate
- **Institute**: Daffodil Polytechnic Institute
- **Graduation**: September 2026
- **WhatsApp**: [+880 1981-810157](https://wa.me/8801981810157)
- **Location**: Dhaka, Bangladesh

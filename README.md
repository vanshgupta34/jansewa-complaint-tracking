# JanSewa — Citizen Complaint Tracking System

> **"Public Service. Your Voice."**

A simple, mobile-friendly React web application that lets citizens report local public issues (roads, water, electricity, garbage, drainage, streetlights) and track the status of their complaints online.

---

## 👥 Team Members

| Name | Student ID |
|------|-----------|
| Vishal Kumar Verma | 12503424 |
| Umesh Kumar Sahu | 12508643 |
| Kanhaiya Gupta | 12504981 |

**Faculty Guide:** Mr. Gagandeep Sethi

---

## 🚀 Features

- **📊 Live Dashboard** – See total, pending, and resolved complaint counts at a glance
- **📝 Easy Complaint Form** – Submit with name, phone, title, category, description & address
- **🏷️ 6 Civic Categories** – Road, Water, Electricity, Garbage, Drainage, Streetlight
- **🔍 Fast Search** – Search complaints by ID, title, category, or status
- **📍 3-Step Tracker** – Track your complaint's progress (Pending → In Progress → Resolved)
- **🛡️ Admin Workspace** – Staff can filter, review, update status, and add remarks

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **React 19** | UI components |
| **React Router v7** | Client-side routing |
| **Vite 6** | Dev server & bundler |
| **CSS3 + Context API** | Styling & shared state |

---

## 📁 Project Structure (MVC Pattern)

```
src/
├── models/
│   └── complaintModel.js         # Creates complaint objects with unique JS-IDs
├── controllers/
│   ├── complaintController.js    # Add / update complaint logic
│   └── ComplaintContext.jsx      # React Context — shares data across pages
├── views/
│   ├── DashboardPage.jsx         # Home: stats + recent complaints
│   ├── SubmitComplaintPage.jsx   # Citizen complaint form
│   ├── MyComplaintsPage.jsx      # Searchable list of all complaints
│   ├── TrackComplaintPage.jsx    # Look up a complaint by JS-ID
│   └── AdminDashboardPage.jsx   # Staff: filter, view, update complaints
└── components/
    ├── SiteLayout.jsx            # Header, nav, footer wrapper
    └── StatusBadge.jsx           # Colored status pill (Pending/In Progress/Resolved)
```

---

## ▶️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → Open http://localhost:5173/

# Build for production
npm run build
```

---

## 📌 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Complaint Dashboard |
| `/submit` | Submit a Complaint |
| `/my-complaints` | My Complaints (search) |
| `/track` | Track Complaint by ID |
| `/admin` | Admin Dashboard |

---

> **Note:** This is a frontend demo project. Complaint data is stored in React state (browser memory only) and clears on page refresh. No backend or database is connected.

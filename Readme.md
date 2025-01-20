# CarrierRise Frontend Project

🚀 **CarrierRise** is a **full-stack web application** designed to facilitate smooth interactions between users and consultants. It provides **authentication**, **scheduling**, and a **dashboard** for consultants and users. The project is built using **React (frontend)** and **Node.js/Express (backend)**.

## 📌 Features
- ✅ **User Authentication** – Secure login & registration system.
- ✅ **Consultant Management** – View & manage consultant profiles.
- ✅ **Session Scheduling** – Book, manage, and track meetings.
- ✅ **Responsive UI** – Modern and mobile-friendly user interface.
- ✅ **State Management** – Uses React Context API for managing state.
- ✅ **REST API Integration** – Backend services using Node.js & Express.

---

## 📂 Project Structure

```plaintext
CarrierRise-Frontend-Project/
├── package.json                    # Root package.json for project dependencies
├── backend/                         # Backend folder (Node.js & Express)
│   ├── db.js                         # Database connection file
│   ├── index.js                       # Main server file
│   ├── package.json                    # Backend dependencies
│   ├── middleware/                     # Authentication middlewares
│   │   ├── Fetchadmin.js
│   │   └── Fetchuser.js
│   ├── models/                         # Database models (MongoDB Mongoose)
│   │   ├── Admin.js
│   │   ├── Consultant.js
│   │   ├── Schedule.js
│   │   └── User.js
│   └── routes/                         # Backend routes (API endpoints)
│       ├── auth.js
│       ├── consultant.js
│       └── schedule.js
│
├── public/                             # Static assets & metadata
│   ├── index.html                       # Root HTML file
│   ├── manifest.json                     # Web app manifest
│   └── robots.txt                        # SEO instructions
│
└── src/                                # Frontend source code (React)
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    │
    ├── user/                           # User dashboard & authentication
    │   ├── consultants-interface/      # Consultant-related pages
    │   │   ├── ConsultantRoute.js
    │   │   ├── authentication/
    │   │   │   ├── Login.js
    │   │   │   └── Register.js
    │   │   ├── context/                # State management (React Context API)
    │   │   │   └── api/
    │   │   │       ├── ConsultantContext.js
    │   │   │       ├── ConsultantState.js
    │   │   │       └── SlotsState.js
    │   │   ├── navbar/                 # UI Components
    │   │   │   ├── Alert.js
    │   │   │   ├── Footer.js
    │   │   │   └── Navbar1.js
    │   │   ├── pages/                   # Consultant Dashboard pages
    │   │   │   ├── AddConsultant.js
    │   │   │   ├── Dashboard.js
    │   │   │   ├── Home.js
    │   │   │   ├── Profile.js
    │   │   │   ├── Slide.js
    │   │   │   └── ViewProfile.js
    │   │   └── session-page/            # Meeting/session pages
    │   │       ├── DashMeet.js
    │   │       ├── Meeting.js
    │   │       └── Room.js
    │   │
    │   ├── image/                        # Static images
    │   └── users-interface/              # User dashboard
    │       ├── UserRouter.js
    │       └── navbar/
    │           └── Navbar2.js


```

# 🛠 Installation Guide

### 1. Clone the Repository

```
git clone https://github.com/rittima/CarrierRise-Frontend-Project.git
cd CarrierRise-Frontend-Project
```

### 2. Backend Setup

```
cd backend
npm install       # Install backend dependencies
node index.js     # Start the backend server

```
### 3. Frontend Setup

```
cd ..
npm install       # Install frontend dependencies
npm start        # Start the React application
```
# 📦 Dependencies

Frontend (React)

* React.js – UI Framework
* React Router – Client-side routing
* React Context API – State management

Backend (Node.js & Express)

* Express.js – Web framework
* MongoDB & Mongoose – Database & ORM
* JWT (JSON Web Tokens) – User authentication
* CORS – Cross-origin request handling

# 🚀 Usage

Once both backend and frontend are running:

```
Open your browser and visit:
http://localhost:3000

```

# 🤝 Contributing

We welcome contributions! Follow these steps:

### 1. Fork the repository.

```
https://github.com/Rknilkant/CarrierRise-Frontend-Project.git

```

### 2. Create a new branch:

```
git checkout -b feature-name
```
### 3. Make your changes and commit:

```
git commit -m "Added new feature"
```
### 4. Push to the branch:

```
git push origin feature-name
```

### 5. Submit a Pull Request.

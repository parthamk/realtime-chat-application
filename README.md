# Realtime Chat Application

This is a real-time chat application with features for group chats, user profiles, and notifications.

## How to run this application on localhost

You need to have the latest version of Node.js and MongoDB Community Server installed.

1. Clone the repository with this command:
   ```
   git clone https://github.com/parthamk/realtime-chat-application.git
   ```

2. Once cloned, get into the directory:
   ```
   cd realtime-chat-application
   ```

3. To run the server, use these commands:
   ```
   cd server
   npm install
   npm start
   ```

4. To run the frontend, use these commands:
   ```
   cd client
   npm install
   npm start
   ```

## Technologies used to create the application

### Frontend
- React.js
- Chakra UI
- Libraries:
  - react-router-dom
  - axios
  - socket.io-client
  - react-scrollable-feed
  - react-toastify
  - @parthamk/notification-badge

### Backend
- Node.js
- MongoDB
- Libraries:
  - express.js
  - mongoose
  - socket.io
  - bcrypt
  - jsonwebtoken
  - colors
  - dotenv

## File Structure

```
└── 📁Feedback-Collection-System
    └── 📁backend
        └── .env
        └── .gitignore
        └── 📁controllers
            └── sampleController.js
        └── 📁models
            └── Sample.js
        └── package-lock.json
        └── package.json
        └── 📁routes
            └── sampleRoutes.js
        └── server.js
    └── 📁frontend
        └── .eslintrc.cjs
        └── .gitignore
        └── index.html
        └── package-lock.json
        └── package.json
        └── postcss.config.js
        └── 📁public
            └── vite.svg
        └── README.md
        └── 📁src
            └── App.css
            └── App.jsx
            └── 📁assets
                └── react.svg
            └── 📁components
                └── Form.jsx
                └── RequireAuth.jsx
            └── index.css
            └── main.jsx
            └── 📁pages
                └── 📁dashboard
                    └── Dashboard.jsx
                    └── Home.jsx
                    └── Profile.jsx
                └── Login.jsx
                └── Register.jsx
        └── tailwind.config.js
        └── vite.config.js
    └── package-lock.json
    └── README.md
    └── 📁server
        └── .env
        └── .gitignore
        └── 📁controllers
            └── authController.js
            └── fromController.js
        └── index.js
        └── 📁models
            └── authModel.js
            └── formModel.js
        └── package-lock.json
        └── package.json
        └── 📁routes
            └── authRoutes.js
            └── formRoute.js
```

## Features

- Real-time messaging
- Group chat functionality
- User authentication
- User profiles
- Notifications

## Contributing

Raise an issue if you like to contribute.
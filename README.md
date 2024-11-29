
# Login - SignUp Page

This project implements a **user authentication system** designed to securely handle login and signup functionalities for a web application. The application uses **JWT (JSON Web Tokens)** for secure user session management and **password-based authentication** to ensure the safety of user credentials. It follows modern web development practices, providing a **scalable, maintainable, and secure solution** for user management. The project is built using **React** for the frontend, **Node.js** for the backend, and **MongoDB** for database management, ensuring a modern, efficient, and robust full-stack application.


## Features

- **Password-based Authentication:** Secure password storage and verification using bcrypt.
- **Authorization with JWT:** Generates a JWT token upon successful login, stores user information and token in local storage, and verifies the token for accessing protected routes.
- **Cool Alerts with React Toastify:** Provides user-friendly notifications for actions like login, signup, and errors.
- **Protected User Table:** Displays a table with user details, only accessible to authenticated users after successful login.



## Tech Stack Used

- **React.js:** Used for building the user interface and managing the application's state in a dynamic, component-based structure.
- **React Toastify:** Provides user-friendly notifications and alerts, enhancing the user experience with real-time feedback.
- **JWT (JSON Web Tokens):** Handles secure user authentication and authorization, storing the token for session management.
- **Node.js:** Serves as the backend runtime environment, enabling the development of scalable server-side applications.
- **MongoDB:** Acts as the database for storing user data and application-related information, offering flexibility and scalability.
- **CSS:** Utilized for styling the website and ensuring a responsive design across different screen sizes.


## Environment Variables

To run this project, you will need to add the following environment variables to your connection file(db.js)

`MONGODB_USERNAME`

`MONGODB_PASSWORD`

```bash
  mongodb+srv://<db_username>:<db_password>@cluster0.mxyuy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

```
Replace `<db_username>` with your actual username.

Repalce `<db_password>` with your actual password.


## Run Locally

Clone the project

```bash
  git clone https://github.com/GujralNaman/login-signup-quantum.git
```

Go to the project directory

```bash
  cd frontend
```

```bash
  cd backend
```

Install dependencies - frontend directory

```bash
  npm install
  npm install react-router-dom
  npm install axios
  npm install react-toastify

```

Install dependencies - backend directory

```bash
  npm install
  npm install mongoose
  npm install bcrypt
  npm install jsonwebtoken
  npm install cors
  npm install body-parser

```

Start both backend and frontend servers individually

Starting Backend server
```bash
  node ./server.js
```

Starting Frontend server
```bash
  npm start
```

## Screenshorts
https://drive.google.com/drive/folders/1SlnhUVZVS08flWdi0JAuDBnbrOs-dUss?usp=sharing
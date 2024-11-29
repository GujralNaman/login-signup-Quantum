import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Table from "./components/Table";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer className="custom-toast-container" />

      <Routes>
        {/* Set the homepage (/) to the Register page */}
        <Route path="/" element={<Register />} />

        {/* Route for login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected route for the table page */}
        <Route
          path="/table"
          element={
            <ProtectedRoute>
              <Table />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

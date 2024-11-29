import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const [form, setForm] = useState({ name: "", dateOfBirth: "", email: "", password: "" });
  const navigate = useNavigate();

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameRegex.test(form.name)) {
      toast.error("Please enter a valid name");
      return;
    }

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      toast.error("Password must be at least 8 characters long and include letters and numbers.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", form);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Registration successful!");
      navigate("/table");
    } catch (error) {
      console.error("Error occured during registration : ",error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        value={form.name}
        required
      />
      <input
        type="date"
        onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
        value={form.dateOfBirth}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        value={form.email}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        value={form.password}
        required
      />
      <button type="submit">Register</button>
      <p className="log">
        Already have an account? <Link to="/login"><span>Login here</span></Link>
      </p>
    </form>
  );
};

export default Register;

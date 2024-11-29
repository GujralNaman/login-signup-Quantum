import React, { useState } from "react";
import axios from "axios";
import "./style/Login.css";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      toast.error(
        "Password must be at least 8 characters long and include letters and numbers."
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", form);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Login successful!");
      navigate("/table");
    } catch (error) {
      console.error("Error occured during login",error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">SIGN IN</div>
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">LOGIN</button>
      <p className="reg">
        Don't have an account?{" "}
        <Link to="/">
          <span>Register here</span>
        </Link>
      </p>
    </form>
  );
};

export default Login;

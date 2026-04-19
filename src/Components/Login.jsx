import React, { useState } from "react";
import users from "../data/users.json";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() && !password.trim()) {
      return setError("Email and Password are required");
    }

    if (!email.trim()) {
      return setError("Email is required");
    }

    if (!password.trim()) {
      return setError("Password is required");
    }

    if (!emailRegex.test(email.trim())) {
      return setError("Invalid email format");
    }

    const user = users.find(
      (u) =>
        u.email.trim() === email.trim() &&
        u.password.trim() === password.trim(),
    );

    if (!user) {
      return setError("Invalid credentials");
    }

    setError("");
    onLogin(user);
  };

  return (
    <div className="login">
      <div className="login-box">
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}

          <div className="submit-btn">
            <button className="btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

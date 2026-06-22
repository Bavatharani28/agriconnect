import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async () => {
  try {
    const response = await api.post(
      "/users/login",
      formData
    );

    console.log(response.data);
    alert("Login Successful!");
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    alert("Invalid Credentials");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back 🌿</h1>
        <p className="subtitle">
          Login to AgriConnect
        </p>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <button
  className="login-btn"
  onClick={handleSubmit}
>
  Login
</button>

        <p className="signup-text">
          New user?{" "}
          <span onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
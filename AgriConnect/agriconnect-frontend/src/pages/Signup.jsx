import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    role: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async () => {
  try {
    const response = await api.post(
      "/users/signup",
      formData
    );

    console.log(response.data);
    setMessage("Signup Successful ✅");

  } catch (error) {
    console.log(error);
    setMessage("Signup Failed ❌");
  }
};
  return (
    <div className="login-page">
  <div className="login-card">

  {message && (
    <div className="success-msg">
      {message}
    </div>
  )}

  <h1>Join AgriConnect 🌿</h1>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

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

        <div className="input-group">
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="FARMER">Farmer</option>
            <option value="WORKER">Worker</option>
            <option value="MACHINE_OWNER">Machine Owner</option>
          </select>
        </div>

        <button className="login-btn" onClick={handleSubmit}>
  Sign Up
</button>

        <p className="signup-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
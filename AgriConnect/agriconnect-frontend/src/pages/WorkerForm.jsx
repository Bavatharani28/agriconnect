import "../styles/Form.css";
import { useState } from "react";
import api from "../services/api";

function WorkerForm() {

  const [worker, setWorker] = useState({
    userId: "",
    location: "",
    pincode: "",
    district: "",
    skill: "",
    dailyWage: "",
    availability: true,
    rating: 0
  });

  const handleChange = (e) => {
    setWorker({
      ...worker,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/workers/register",
        worker
      );

      alert("Worker Registered Successfully!");
      console.log(response.data);

    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Worker Registration</h1>

        <div className="form-group">
          <label>User ID</label>
          <input
            name="userId"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            name="location"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            name="pincode"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>District</label>
          <input
            name="district"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Skill</label>
          <input
            name="skill"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Daily Wage</label>
          <input
            name="dailyWage"
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn">
          Register Worker
        </button>
      </form>
    </div>
  );
}

export default WorkerForm;
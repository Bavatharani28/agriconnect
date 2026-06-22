import "../styles/Form.css";
import { useState } from "react";
import api from "../services/api";

function FarmerForm() {
  const [job, setJob] = useState({
    farmerId: "",
    jobType: "",
    workersNeeded: "",
    jobDate: "",
    wageOffered: "",
    location: "",
    status: "OPEN"
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(job);

    try {
      const response = await api.post(
        "/jobs/create",
        job
      );

      alert("Job Posted Successfully!");
      console.log(response.data);

    } catch (error) {
      console.log(error);
      alert("Job Posting Failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Farmer Job Posting</h1>

        <div className="form-group">
          <label>Farmer ID</label>
          <input
            type="number"
            name="farmerId"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Job Type</label>
          <input
            name="jobType"
            placeholder="Harvesting / Planting"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Workers Needed</label>
          <input
            type="number"
            name="workersNeeded"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Job Date</label>
          <input
            type="date"
            name="jobDate"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Wage Offered</label>
          <input
            type="number"
            name="wageOffered"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            name="location"
            placeholder="Pollachi"
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default FarmerForm;
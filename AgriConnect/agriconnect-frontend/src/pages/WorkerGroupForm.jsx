import "../styles/Form.css";
import { useState } from "react";
import api from "../services/api";

function WorkerGroupForm() {
  const [group, setGroup] = useState({
    userId: "",
    leaderName: "",
    phone: "",
    location: "",
    pincode: "",
    district: "",
    farmingType: "",
    numberOfWorkers: "",
    ratePerDay: "",
    availability: true
  });

  const handleChange = (e) => {
    setGroup({
      ...group,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/groups/register",
        group
      );

      console.log(response.data);
      alert("Worker Group Registered!");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Worker Group Registration</h1>

        <input name="userId" placeholder="User ID" onChange={handleChange}/>
        <input name="leaderName" placeholder="Leader Name" onChange={handleChange}/>
        <input name="phone" placeholder="Phone" onChange={handleChange}/>
        <input name="location" placeholder="Location" onChange={handleChange}/>
        <input name="pincode" placeholder="Pincode" onChange={handleChange}/>
        <input name="district" placeholder="District" onChange={handleChange}/>
        <input name="farmingType" placeholder="Farming Type" onChange={handleChange}/>
        <input name="numberOfWorkers" placeholder="No of Workers" onChange={handleChange}/>
        <input name="ratePerDay" placeholder="Rate Per Day" onChange={handleChange}/>

        <button className="submit-btn">
          Register Group
        </button>
      </form>
    </div>
  );
}

export default WorkerGroupForm;
import "../styles/Form.css";
import { useState } from "react";
import api from "../services/api";

function MachineForm() {
  const [machine, setMachine] = useState({
    userId: "",
    machineType: "",
    pricePerAcre: "",
    pricePerHour: "",
    location: "",
    pincode: "",
    district: "",
    availability: true
  });

  const handleChange = (e) => {
    setMachine({
      ...machine,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(machine);

    try {
      const response = await api.post(
        "/machines/register",
        machine
      );

      alert("Machine Registered Successfully!");
      console.log(response.data);

    } catch (error) {
      console.log(error);
      alert("Machine Registration Failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Machine Registration</h1>

        <div className="form-group">
          <label>User ID</label>
          <input
            type="number"
            name="userId"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Machine Type</label>
          <input
            name="machineType"
            placeholder="Tractor / Harvester"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price per Acre</label>
          <input
            type="number"
            name="pricePerAcre"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price per Hour</label>
          <input
            type="number"
            name="pricePerHour"
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

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="number"
            name="pincode"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>District</label>
          <input
            name="district"
            placeholder="Coimbatore"
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn">
          Register Machine
        </button>
      </form>
    </div>
  );
}

export default MachineForm;
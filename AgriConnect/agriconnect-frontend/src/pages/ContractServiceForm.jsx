import "../styles/Form.css";
import { useState } from "react";
import api from "../services/api";

function ContractServiceForm() {
  const [service, setService] = useState({
    userId: "",
    providerName: "",
    phone: "",
    location: "",
    pincode: "",
    district: "",
    farmType: "",
    pricePerAcre: "",
    availability: true
  });

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/contract-services/register",
        service
      );

      console.log(response.data);
      alert("Contract Service Registered!");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Contract Service Registration</h1>

        <input name="userId" placeholder="User ID" onChange={handleChange}/>
        <input name="providerName" placeholder="Provider Name" onChange={handleChange}/>
        <input name="phone" placeholder="Phone" onChange={handleChange}/>
        <input name="location" placeholder="Location" onChange={handleChange}/>
        <input name="pincode" placeholder="Pincode" onChange={handleChange}/>
        <input name="district" placeholder="District" onChange={handleChange}/>
        <input name="farmType" placeholder="Farm Type" onChange={handleChange}/>
        <input name="pricePerAcre" placeholder="Price per Acre" onChange={handleChange}/>

        <button className="submit-btn">
          Register Service
        </button>
      </form>
    </div>
  );
}

export default ContractServiceForm;
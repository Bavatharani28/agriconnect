import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <div className="dashboard-title">
        <h1>AgriConnect Dashboard 🌿</h1>
        <p>Select a service to continue</p>
      </div>

      <div className="card-grid">

        <div
          className="service-card"
          onClick={() => navigate("/worker-form")}
        >
          <h2>Worker Registration</h2>
          <p>Register agricultural workers with skills and wages.</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/farmer-form")}
        >
          <h2>Farmer Job Posting</h2>
          <p>Farmers can post labor requirements.</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/machine-form")}
        >
          <h2>Machine Booking</h2>
          <p>Register tractors and agricultural machines.</p>
        </div>

       <div
  className="service-card"
  onClick={() => navigate("/matching")}
>
  <h2>Smart Matching</h2>
  <p>AI-powered worker matching.</p>
</div>
<div className="service-card" onClick={() => navigate("/worker-group")}>
   <h2>Worker Groups</h2>
   <p>Manage and organize worker groups.</p>
</div>

<div className="service-card" onClick={() => navigate("/contract-service")}>
   <h2>Contract Services</h2>
   <p>Register and manage contract services.</p>
</div>
<div
  className="service-card"
  onClick={() => navigate("/admin")}
>
  <h2>Admin Analytics</h2>
  <p>View platform statistics and analytics.</p>
</div>
<div
  className="service-card"
  onClick={() => navigate("/marketplace")}
>
  <h2>Available Services</h2>
  <p>Browse workers, machines and contractors.</p>
</div>

      </div>
    </div>
  );
}

export default Dashboard;
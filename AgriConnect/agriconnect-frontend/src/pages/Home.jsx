import "../styles/Home.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <h1>
            Connecting Farmers with the Right Workforce
          </h1>

          <p>
            Hire workers, machinery, groups, and contractors
            instantly through AgriConnect.
          </p>

          <div className="hero-buttons">
           <button onClick={() => navigate("/signup")}>
  Get Started
</button>
           <button onClick={() => navigate("/dashboard")}>
  Explore Services
</button>
          </div>
        </div>

        <div className="hero-right">
  <div className="dashboard-card">

    <div className="dashboard-header">
      <h3>Agri Dashboard</h3>
      <span>Live</span>
    </div>

    <div className="stat-box">
      <h4>Workers Available</h4>
      <p>128</p>
    </div>

    <div className="stat-box">
      <h4>Machines Nearby</h4>
      <p>42</p>
    </div>

    <div className="stat-box">
      <h4>Active Bookings</h4>
      <p>63</p>
    </div>

  </div>
</div>
      </section>
    </>
  );
}

export default Home;
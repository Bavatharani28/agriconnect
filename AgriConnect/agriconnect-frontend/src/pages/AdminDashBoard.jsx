import "../styles/Admin.css";
import { useEffect, useState } from "react";
import api from "../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get("/admin/stats");
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-page">
      <h1>AgriConnect Analytics</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>{stats.totalUsers}</h2>
          <p>Total Users</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalWorkers}</h2>
          <p>Total Workers</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalJobs}</h2>
          <p>Jobs Posted</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalBookings}</h2>
          <p>Bookings</p>
        </div>

        <div className="stat-card">
          <h2>{stats.totalMachines}</h2>
          <p>Machines</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2>AgriConnect 🌿</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <button onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
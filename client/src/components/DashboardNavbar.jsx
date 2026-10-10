import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import "../styles/Dashboard.css";

function DashboardNavbar() {
  return (
    <div className="dashboard-navbar">

      <div>
        <h2>👋 Welcome Back, Bhoomi</h2>
        <p>Manage your events and track environmental impact.</p>
      </div>

      <div className="navbar-right">

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="notification">
          <FaBell />
          <span className="notification-badge">3</span>
        </div>

        <div className="profile">
          <FaUserCircle />
          <span>Organizer</span>
        </div>

      </div>

    </div>
  );
}

export default DashboardNavbar;
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaTachometerAlt,
  FaCalendarAlt,
  FaHandsHelping,
  FaRobot,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/Dashboard.css";

function DashboardSidebar() {
  return (
    <div className="sidebar">

      {/* Logo */}

      <div>

        <div className="sidebar-logo">

          <FaLeaf className="logo-icon" />

          <h2>EcoBridge</h2>

          <p>Waste Recovery</p>

        </div>

        {/* Menu */}

        <ul className="sidebar-menu">

          <li>
            <Link to="/dashboard">
              <FaTachometerAlt />
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/events">
              <FaCalendarAlt />
              Events
            </Link>
          </li>

          <li>
            <Link to="/ngos">
              <FaHandsHelping />
              NGOs
            </Link>
          </li>

          <li>
            <Link to="/ai">
              <FaRobot />
              AI Recommendation
            </Link>
          </li>

          <li>
            <Link to="/profile">
              <FaUserCircle />
              Profile
            </Link>
          </li>

        </ul>

      </div>

      {/* Logout */}

      <div className="logout">

        <Link to="/login">

          <FaSignOutAlt />

          Logout

        </Link>

      </div>

    </div>
  );
}

export default DashboardSidebar;
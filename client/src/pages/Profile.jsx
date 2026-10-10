import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-left">

          <FaUserCircle className="profile-avatar"/>

          <h2>Bhoomi K Desai</h2>

          <p>Event Organizer</p>

          <button>Edit Profile</button>

        </div>

        <div className="profile-right">

          <h2>Personal Information</h2>

          <div className="info">

            <p><FaEnvelope/> bhoomi@gmail.com</p>

            <p><FaPhone/> +91 9876543210</p>

            <p><FaMapMarkerAlt/> Ahmedabad, Gujarat</p>

          </div>

          <div className="stats">

            <div className="stat-box">
              <h1>25</h1>
              <span>Events</span>
            </div>

            <div className="stat-box">
              <h1>12</h1>
              <span>NGOs</span>
            </div>

            <div className="stat-box">
              <h1>980kg</h1>
              <span>Food Saved</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;
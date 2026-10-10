import {
  FaRobot,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";

function RecommendationCard() {
  return (
    <div className="recommendation-card">

      <div className="recommendation-header">

        <div className="robot-icon">
          <FaRobot />
        </div>

        <div>
          <h2>Best NGO Match Found</h2>
          <p>Based on AI analysis</p>
        </div>

      </div>

      <div className="ngo-info">

        <h1>Robin Hood Army</h1>

        <div className="rating">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>5.0 Rating</span>

        </div>

        <p>
          <FaMapMarkerAlt className="info-icon" />
          Ahmedabad, Gujarat
        </p>

        <p>
          <FaPhone className="info-icon" />
          +91 9876543210
        </p>

        <p>
          <FaEnvelope className="info-icon" />
          robinhood@gmail.com
        </p>

        <div className="match-box">

          <span>AI Match Score</span>

          <h1>98%</h1>

        </div>

        <div className="impact-box">

          <FaLeaf />

          <div>

            <h4>Environmental Impact</h4>

            <p>
              Approx. 250 KG food can feed
              nearly 600 people while reducing waste.
            </p>

          </div>

        </div>

        <button className="assign-btn">
          Assign NGO
        </button>

      </div>

    </div>
  );
}

export default RecommendationCard;
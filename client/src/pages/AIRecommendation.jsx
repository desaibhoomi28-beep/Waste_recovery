import RecommendationCard from "../components/RecommendationCard";
import "../styles/AIRecommendation.css";

function AIRecommendation() {
  return (
    <div className="ai-page">

      <div className="ai-header">

        <h1>🤖 AI Recommendation</h1>

        <p>
          Our intelligent recommendation engine finds the best NGO
          based on event location, food quantity and availability.
        </p>

      </div>

      <RecommendationCard />

    </div>
  );
}

export default AIRecommendation;
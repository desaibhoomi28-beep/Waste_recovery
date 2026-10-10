import {
  FaCalendarPlus,
  FaClipboardList,
  FaRobot,
  FaHandsHelping,
  FaTruck,
  FaLeaf,
} from "react-icons/fa";

import "../styles/Home.css";

function HowItWorks() {
  const steps = [
    {
      icon: <FaCalendarPlus />,
      title: "Create Event",
      text: "Organizer creates a new event with date, venue and expected waste.",
    },
    {
      icon: <FaClipboardList />,
      title: "Add Waste Details",
      text: "Enter food quantity and reusable materials after the event.",
    },
    {
      icon: <FaRobot />,
      title: "AI Matching",
      text: "EcoBridge recommends the best NGO based on location and availability.",
    },
    {
      icon: <FaHandsHelping />,
      title: "NGO Accepts",
      text: "The NGO reviews the request and confirms the pickup.",
    },
    {
      icon: <FaTruck />,
      title: "Pickup",
      text: "Collected food and materials are transported safely.",
    },
    {
      icon: <FaLeaf />,
      title: "Impact",
      text: "Dashboard updates the environmental impact instantly.",
    },
  ];

  return (
    <section className="how-section">

      <div className="container">

        <h2 className="section-title">
          How EcoBridge Works
        </h2>

        <p className="section-subtitle">
          A simple workflow powered by AI to reduce event waste.
        </p>

        <div className="row g-4 mt-4">

          {steps.map((step, index) => (

            <div className="col-lg-4 col-md-6" key={index}>

              <div className="how-card">

                <div className="how-icon">
                  {step.icon}
                </div>

                <h4>{step.title}</h4>

                <p>{step.text}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;
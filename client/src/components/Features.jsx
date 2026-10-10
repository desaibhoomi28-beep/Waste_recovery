import {
  FaRobot,
  FaRecycle,
  FaHandsHelping,
  FaLeaf,
  FaChartLine,
  FaTruck
} from "react-icons/fa";

import "../styles/Home.css";

function Features() {
  return (

    <section className="features" id="features">

      <div className="container">

        <h2 className="text-center mb-5">

          Why Choose EcoBridge?

        </h2>

        <div className="row g-4">

          <div className="col-lg-4">

            <div className="feature-card">

              <FaRobot className="feature-icon"/>

              <h4>AI Recommendation</h4>

              <p>

                Smart AI recommends the most suitable NGO
                based on food type, location and availability.

              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="feature-card">

              <FaRecycle className="feature-icon"/>

              <h4>Waste Recovery</h4>

              <p>

                Recover reusable materials and reduce landfill
                waste through sustainable practices.

              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="feature-card">

              <FaHandsHelping className="feature-icon"/>

              <h4>NGO Collaboration</h4>

              <p>

                Connect event organizers directly with
                trusted NGOs for faster pickups.

              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="feature-card">

              <FaLeaf className="feature-icon"/>

              <h4>Eco Friendly</h4>

              <p>

                Promote green events by reducing food
                wastage and increasing sustainability.

              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="feature-card">

              <FaChartLine className="feature-icon"/>

              <h4>Analytics Dashboard</h4>

              <p>

                Track events, donations, recovered waste
                and NGO performance in real time.

              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="feature-card">

              <FaTruck className="feature-icon"/>

              <h4>Quick Pickup</h4>

              <p>

                NGOs receive instant notifications and
                schedule pickups with minimal delay.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Features;
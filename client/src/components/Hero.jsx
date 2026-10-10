import { motion } from "framer-motion";
import { FaArrowRight, FaLeaf, FaRecycle, FaHandsHelping } from "react-icons/fa";
import "../styles/Home.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">

            <motion.h1
              className="hero-title"
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Save Food.
              <br />
              Save Nature.
              <br />
              Save Lives.
            </motion.h1>

            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              EcoBridge is an AI-powered platform that connects
              Event Organizers with NGOs to recover surplus food,
              reduce waste, and create a greener future.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button className="hero-btn">
                Get Started <FaArrowRight className="ms-2" />
              </button>
            </motion.div>

            <div className="hero-badges mt-4">

              <span>
                <FaLeaf className="me-2" />
                Eco Friendly
              </span>

              <span>
                <FaRecycle className="me-2" />
                Waste Recovery
              </span>

              <span>
                <FaHandsHelping className="me-2" />
                NGO Support
              </span>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">

            <motion.img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900"
              alt="EcoBridge"
              className="hero-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
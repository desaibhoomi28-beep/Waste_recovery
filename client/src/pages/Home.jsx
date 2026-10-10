import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      {/* About Section */}
      <section className="about py-5" id="about">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1492496913980-501348b61469?w=900"
                alt="Nature"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">

              <h2 className="fw-bold text-success">
                About EcoBridge
              </h2>

              <p className="mt-4">
                EcoBridge is an AI-powered Event Waste Recovery Platform
                connecting Event Organizers with NGOs for efficient food
                donation and waste management.
              </p>

              <p>
                Our mission is to reduce event waste while helping
                communities through smart recommendations and sustainable
                practices.
              </p>

              <button className="hero-btn">
                Learn More
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}

      <section className="contact py-5" id="contact">

        <div className="container text-center">

          <h2>
            Join the Green Revolution 🌿
          </h2>

          <p className="mt-3">
            Together we can reduce waste and create
            a cleaner future.
          </p>

          <button className="hero-btn mt-4">
            Get Started
          </button>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Home;
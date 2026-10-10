const Event = require("../models/Event");
const Ngo = require("../models/Ngo");

exports.recommendNgo = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const ngos = await Ngo.find({ available: true });

    let recommendations = [];

    ngos.forEach((ngo) => {
      let score = 0;
      let reasons = [];

      // Food
      if (
        event.foodQuantity > 0 &&
        ngo.acceptedWaste.includes("Food")
      ) {
        score += 40;
        reasons.push("Accepts Food");
      }

      // Water
      if (
        event.waterBottles > 0 &&
        ngo.acceptedWaste.includes("Water")
      ) {
        score += 30;
        reasons.push("Accepts Water");
      }

      // Banners
      if (
        event.banners > 0 &&
        ngo.acceptedWaste.includes("Banners")
      ) {
        score += 20;
        reasons.push("Accepts Banners");
      }

      // Capacity
      if (ngo.capacity >= event.foodQuantity) {
        score += 10;
        reasons.push("Enough Capacity");
      }

      recommendations.push({
        ngoName: ngo.ngoName,
        score,
        reasons,
      });
    });

    recommendations.sort((a, b) => b.score - a.score);

    res.status(200).json({
      success: true,
      event: event.eventName,
      recommendations,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
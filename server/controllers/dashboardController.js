const Event = require("../models/Event");
const Ngo = require("../models/Ngo");

exports.getDashboardStats = async (req, res) => {
  try {

    const totalEvents = await Event.countDocuments();

    const totalNgos = await Ngo.countDocuments();

    const recentEvents = await Event.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      stats: {
        totalEvents,
        totalNgos,
      },
      recentEvents,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
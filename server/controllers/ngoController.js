const Ngo = require("../models/Ngo");

// Create NGO
exports.createNgo = async (req, res) => {
  try {
    const ngo = await Ngo.create(req.body);

    res.status(201).json({
      success: true,
      message: "NGO Added Successfully",
      ngo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All NGOs
exports.getAllNgos = async (req, res) => {
  try {
    const ngos = await Ngo.find();

    res.status(200).json({
      success: true,
      count: ngos.length,
      ngos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update NGO
exports.updateNgo = async (req, res) => {
  try {
    const ngo = await Ngo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!ngo) {
      return res.status(404).json({
        success: false,
        message: "NGO Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "NGO Updated Successfully",
      ngo,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete NGO
exports.deleteNgo = async (req, res) => {
  try {
    const ngo = await Ngo.findByIdAndDelete(req.params.id);

    if (!ngo) {
      return res.status(404).json({
        success: false,
        message: "NGO Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "NGO Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
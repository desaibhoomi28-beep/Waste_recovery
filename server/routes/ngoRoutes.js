const express = require("express");
const router = express.Router();

const {
  authMiddleware,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const {
  createNgo,
  getAllNgos,
  updateNgo,
  deleteNgo,
} = require("../controllers/ngoController");

// Get all NGOs
router.get("/", authMiddleware, getAllNgos);

// Create NGO
router.post(
  "/",
  authMiddleware,
  authorizeRoles("admin"),
  createNgo
);

// Update NGO
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("admin"),
  updateNgo
);

// Delete NGO
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("admin","organizer"),
  deleteNgo
);

module.exports = router;
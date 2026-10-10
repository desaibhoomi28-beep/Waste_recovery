const express = require("express");
const router = express.Router();

const {
    authMiddleware,
    authorizeRoles
} = require("../middleware/authMiddleware");

const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// Get all events
router.get("/", authMiddleware, getAllEvents);

// Create event
router.post(
    "/",
    authMiddleware,
    authorizeRoles("organizer","admin"),
    createEvent
);

// UpPdate event
router.put("/:id", authMiddleware, updateEvent);

// Delete event
router.delete(
    "/:id",
    authMiddleware,
    authorizeRoles("admin"),
    deleteEvent
);

module.exports = router;
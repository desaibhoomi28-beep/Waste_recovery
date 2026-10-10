const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middleware/authMiddleware");

const { recommendNgo } = require("../controllers/aiController");

router.get(
  "/recommend/:id",
  authMiddleware,
  recommendNgo
);

module.exports = router;
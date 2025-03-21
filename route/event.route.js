const express = require("express");
const eventController = require("./../controller/event.controller.js");

const router = express.Router();

router.get("/", () => {});
router.get("/:id", eventController.getById);
router.post("/", eventController.create);
router.put("/:id", () => {});
router.delete("/:id", () => {});

module.exports = router;

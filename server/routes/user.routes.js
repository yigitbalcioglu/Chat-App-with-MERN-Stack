const express = require("express");
const protectRoute = require ("../middleware/protectRoute.js");
const { getUsersForSidebar } = require ("../controller/user.controller.js");

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;

const router = require("express").Router();
const storyRoutes = require("./stories");

// Book routes
router.use("/stories", storyRoutes);

module.exports = router;

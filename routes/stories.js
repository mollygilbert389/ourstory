const router = require("express").Router();
const storyController = require("../../controllers/storyController");

// Matches with "/api/books"
router.route("/")
  .get(storyController.findAll)
  .post(storyController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(storyController.findById)
  .put(storyController.update)
  .delete(storyController.remove);

module.exports = router;
const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// router.route("/tweeter")
//   .get(booksController.tweeter)
  

router.post('/', booksController.create);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router
  .route("/newUser")
  .post(booksController.newUser)

module.exports = router;
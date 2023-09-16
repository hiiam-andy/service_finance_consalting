const Router = require("express");
const router = new Router();
const cartController = require("../controllers/cartController");

router.post("/", cartController.addToCart);
router.get("/", cartController.getCart);

module.exports = router;

const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");

router.get("/", brandController.get);
router.post("/", brandController.create);
router.delete("/", brandController.delete);

module.exports = router;

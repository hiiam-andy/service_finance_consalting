const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");

router.post("/", brandController.create);
router.get("/", brandController.get);
router.put("/", brandController.update);
router.delete("/", brandController.delete);

module.exports = router;

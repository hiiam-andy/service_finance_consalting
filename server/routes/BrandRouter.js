const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), brandController.create);
router.get("/", brandController.get);
router.put("/", checkRole("ADMIN"), brandController.update);
router.delete("/", checkRole("ADMIN"), brandController.delete);

module.exports = router;

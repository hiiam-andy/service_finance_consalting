const Router = require("express").Router;
const router = new Router();

const userRouter = require("./UserRouter");
const typeRouter = require("./TypeRouter");
const brandRouter = require("./BrandRouter");
const productRouter = require("./ProductRouter");
const cartController = require("./CartRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/cart", cartController);

module.exports = router;

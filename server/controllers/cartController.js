const { Cart, User, Product } = require("../models/models");

class cartController {
  async addToCart(req, res) {
    try {
      const { userId, productId } = req.body;
      const product = await Product.findByPk(productId);
      const user = await User.findByPk(userId);
      if (!product || !user) {
        return res
          .status(200)
          .json({ message: "Пользователь или товар не найдены" });
      }

      const productInCart = await Cart.create({ userId, productId });
      return res.ststus(200).json(productInCart);
    } catch (err) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
  async getCart(req, res) {
    try {
      const { userId } = req.body;
      const cartItem = await Cart.findAll({ where: { userId } });
      return res.json(cartItem);
    } catch (err) {
      return res.json({ message: "Что-то пошло не так" });
    }
  }
}

module.exports = new cartController();

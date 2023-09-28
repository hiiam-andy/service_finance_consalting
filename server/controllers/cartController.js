const { Cart, User, Product } = require("../models/models");

class cartController {
  async addToCart(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const product = await Product.findByPk(productId);
      const user = await User.findByPk(userId);
      if (!product || !user) {
        return res
          .status(200)
          .json({ message: "Пользователь или товар не найдены" });
      }
      const productInCart = await Cart.create({ userId, productId, quantity });
      return res.status(200).json(productInCart);
    } catch (err) {
      return res.status(500).json({ message: "Что-то пошло не так" });
    }
  }

  // SELECT products.id,products.name, products.price FROM products RIGHT JOIN carts
  // ON products.id=carts.productId AND userId=11 WHERE products.id is not null
  async getCart(req, res) {
    const { userId } = req.query;
    try {
      const cartItem = await Product.findAll({
        attributes: ["id", "name", "price", "img", "info", "quantity"],
        include: {
          model: Cart,
          required: true,
          where: { userId },
        },
      });
      return res.json(cartItem);
    } catch (err) {
      return res.json({ message: "Что-то пошло не так" });
    }
  }
}

module.exports = new cartController();

const uuid = require("uuid");
const ApiError = require("../error/apiError");
const { Product } = require("../models/models");
const path = require("path");

class deviceController {
  async create(req, res, next) {
    try {
      const { name, price, info, quantity, brandId, typeId } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const product = await Product.create({
        name,
        price,
        info,
        quantity,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(product);
    } catch (err) {
      next(ApiError.badRequest(err.message));
      return res.json({ message: "Что-то пошло не так" });
    }
  }

  async getAll(req, res) {}

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    return res.json(product);
  }

  async delete(req, res) {}
}
module.exports = new deviceController();

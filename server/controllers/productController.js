const uuid = require("uuid");
const ApiError = require("../error/apiError");
const { Product } = require("../models/models");
const path = require("path");
var fs = require("fs");

class deviceController {
  async create(req, res, next) {
    try {
      const { name, price, info, quantity, brandId, typeId } = req.body;
      const { img } = req.files;
      console.log(img);
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

  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let product;
    if (!brandId && !typeId) {
      product = await Product.findAll();
    }
    if (brandId && !typeId) {
      product = await Product.findAll({ where: { brandId } });
    }
    if (!brandId && typeId) {
      product = await Product.findAll({ where: { typeId } });
    }
    if (brandId && typeId) {
      product = await Product.findAll({ where: { typeId, brandId } });
    }
    return res.json(product);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    return res.json(product);
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
      const product = await Product.findAll({ where: { id } });
      const fileName = product[0].img;
      fs.rm(path.resolve(__dirname, "..", "static", fileName));
      await Product.destroy({ where: { id } });
      return res.json({ message: `Продукт с id=${id} удалён` });
    } catch (err) {
      return res.json({ message: `Продукт с id=${id} не найден` });
    }
  }
}
module.exports = new deviceController();

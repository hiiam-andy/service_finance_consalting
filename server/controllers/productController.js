const { Product } = require("../models/models");

class deviceController {
  async create(req, res, next) {}

  async getAll(req, res) {}

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    return res.json(product);
  }

  async delete(req, res) {}
}
module.exports = new deviceController();

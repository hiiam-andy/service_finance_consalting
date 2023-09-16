const { Brand } = require("../models/models");

class brandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }
  async get(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async update(req, res) {
    const { name, newName } = req.body;
    await Brand.update({ name: newName }, { where: { name } });
    return res.json({ message: "Изменено" });
  }
  async delete(req, res) {
    const { name } = req.body;
    await Brand.destroy({ where: { name } });
    return res.json({ message: "Удалено" });
  }
}

module.exports = new brandController();

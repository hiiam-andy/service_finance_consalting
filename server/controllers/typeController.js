const { Type } = require("../models/models");

class typeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
  async get(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async update(req, res) {
    const { name, newName } = req.body;
    const type = await Type.update({ name: newName }, { where: { name } });
    return res.json({ message: "Изменено" });
  }
  async delete(req, res) {
    const { name } = req.body;
    await Type.destroy({ where: { name } });
    return res.json({ message: "Удалено" });
  }
}
module.exports = new typeController();

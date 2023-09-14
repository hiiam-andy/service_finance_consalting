const { Type } = require("../models/models");

class typeController {
  async create(req, res) {}
  async get(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async delete(req, res) {}
}
module.exports = new typeController();

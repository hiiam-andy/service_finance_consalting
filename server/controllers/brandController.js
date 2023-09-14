const { Brand } = require("../models/models");

class brandController {
  async create(req, res) {}
  async get(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
  async delete(req, res) {}
}

module.exports = new brandController();

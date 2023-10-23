"use strict";

const ServicoFotos = require("../servico/ServicoFotos");

module.exports = class ControleFotos {

  static async buscarFotosGatos(req, res) {
    try {
      const fotos = await ServicoFotos.buscarFotosGatos();
      console.log("Gatos", fotos);
      res.json(fotos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }// findAll

  static async buscarFotosCachorros(req, res) {
    try {
      const fotos = await ServicoFotos.buscarFotosCachorros();
      console.log("Cachorros", fotos);
      res.json(fotos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }// findAll
  
}; // class
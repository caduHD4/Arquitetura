"use strict";

const ControleFotos = require("../controle/ControleFotos");

module.exports = class RotaFotos {
  constructor(app) {
    app
      .route("/fotos/gatos")
      .get(ControleFotos.buscarFotosGatos);

      app
      .route("/fotos/cachorros")
      .get(ControleFotos.buscarFotosCachorros);
  } // constructor()
}; // class
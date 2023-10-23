"use strict";

const  GeradorDeLink  = require('./GeradorDeLink');

module.exports = class ServicoFotos {

    static async buscarFotosGatos() {
            try {
                const link = GeradorDeLink(2);
                return link
            } catch (error) {
                throw new Error("Falha ao buscar fotos: " + error);
            }
    } // buscarFotos

    static async buscarFotosCachorros() {
        try {
            const link = GeradorDeLink(1);
            return link
        } catch (error) {
            throw new Error("Falha ao buscar fotos: " + error);
        }
    } // buscarFotos
} // class
"use strict";

import Pokemon from "./Pokemon";

class PokemonTeam {
    /**
     * @param {string} format
     * @param {string} name
     * @param {string|undefined} folder
     */
    constructor(format = 'gen7', name = 'Untitled', folder = undefined) {
        /**
         *
         * @type {string}
         */
        this.name = name;
        /**
         *
         * @type {string}
         */
        this.format = format;
        /**
         *
         * @type {string|undefined}
         */
        this.folder = folder;
        /**
         *
         * @type {Pokemon[]}
         */
        this.pokemon = [];
    }

    /**
     * @param {object|PokemonTeam} obj
     * @returns {PokemonTeam}
     */
    static fromObject(obj) {
        let team = new PokemonTeam();
        team.name = obj.name;
        team.format = obj.format;
        team.folder = obj.folder;
        team.pokemon = obj.pokemon ? obj.pokemon.map(function (pokemon) {
            return Pokemon.fromObject(pokemon);
        }) : [];

        return team;
    }

    /**
     * @param {Number} indentation
     * @returns {string}
     */
    toJson(indentation = 2) {
        return JSON.stringify(this, null, indentation);
    }

    /**
     * @returns {string}
     */
    toShowdown() {
        let name = this.folder ? `${this.folder}/${this.name}` : this.name;
        let str = `=== [${this.format}] ${name} ===\n\n`;

        str += this.pokemon.map(function (p) {
            return p.toString();
        }).join('\n\n');

        return str.trim();
    }

    /**
     * @returns {string}
     */
    toString() {
        return this.toShowdown();
    }
}

export default PokemonTeam;
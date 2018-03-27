"use strict";

import Pokemon from "Pokemon";
import PokemonTeam from "PokemonTeam";
import PokemonTeamSet from "PokemonTeamSet";
import ShowdownParser from "ShowdownParser";

class Koffing {
    /**
     * @param {String} text
     * @returns {PokemonTeamSet}
     */
    static parse(text) {
        if (typeof text === 'string' || text instanceof String) {
            return ShowdownParser.parse(text);
        }
        throw new Error("Invalid argument type for 'text'.");
    }

    /**
     * @param {PokemonTeamSet|PokemonTeam|Pokemon} data
     * @returns {String}
     */
    static stringify(data) {
        if (
            data instanceof PokemonTeamSet
            || data instanceof PokemonTeam
            || data instanceof Pokemon
        ) {
            return data.toString();
        }
        throw new Error("Invalid argument type for 'data'.");
    }

    /**
     * @param {String|PokemonTeamSet|PokemonTeam|Pokemon} value
     * @returns {boolean}
     */
    static isValid(value) {
        try {
            if (typeof value === 'string' || value instanceof String) {
                this.parse(value);
            } else {
                this.stringify(value);
            }
            return true;
        } catch (e) {
            return false;
        }
    }
}

export {
    Koffing
};

export default Koffing;
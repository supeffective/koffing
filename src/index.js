"use strict";

import Set from "Set";
import Team from "Team";
import Pokemon from "Pokemon";
import _parse from "Parser";

class SmogonParser {
    /**
     * @param {String} text
     * @returns {Set}
     */
    static parse(text) {
        if (typeof text === 'string' || text instanceof String) {
            return _parse(text);
        }
        throw new Error("Invalid argument type for 'text'.");
    }

    /**
     * @param {Set|Team|Pokemon} data
     * @returns {String}
     */
    static stringify(data) {
        if (
            data instanceof Set
            || data instanceof Team
            || data instanceof Pokemon
        ) {
            return data.toString();
        }
        throw new Error("Invalid argument type for 'data'.");
    }

    /**
     * @param {String|Set|Team|Pokemon} value
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
    SmogonParser
};
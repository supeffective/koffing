"use strict";

class Team {
    constructor(name = undefined, format = undefined, pokemon = []) {
        this.name = name;
        this.format = format;
        this.pokemon = pokemon;
    }

    toString() {
        let str = `=== [${this.format}] ${this.name} ===\n\n`;

        str += this.pokemon.map(function (p) {
            return p.toString();
        }).join('\n\n');

        return str.trim();
    }
}

export default Team;
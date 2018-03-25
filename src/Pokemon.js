"use strict";

class Pokemon {
    constructor(name = undefined) {
        this.name = name;
        this.nickname = undefined;
        this.gender = undefined;
        this.item = undefined;
        this.ability = undefined;
        this.level = undefined;
        this.shiny = undefined;
        this.happiness = undefined;
        this.evs = undefined;
        this.ivs = undefined;
        this.nature = undefined;
        this.moves = [];
    }

    toString() {
        return this.name;
    }
}

export default Pokemon;

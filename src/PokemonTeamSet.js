"use strict";

class PokemonTeamSet {
    constructor(teams = []) {
        this.teams = teams;
    }

    toString() {
        return this.teams.map(function (p) {
            return p.toString();
        }).join('\n\n').trim();
    }
}

export default PokemonTeamSet;
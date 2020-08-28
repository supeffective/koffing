import PokemonTeam from "./PokemonTeam";

class PokemonTeamSet {
    /**
     * @param {PokemonTeam[]} teams
     */
    constructor(teams = []) {
        this.teams = teams;
    }

    /**
     * @param {object|PokemonTeamSet} obj
     * @returns {PokemonTeamSet}
     */
    static fromObject(obj) {
        let teamSet = new PokemonTeamSet();
        teamSet.teams = obj.teams ? obj.teams.map(function (team) {
            return PokemonTeam.fromObject(team);
        }) : [];

        return teamSet;
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
        return this.teams
            .map(function (p) {
                return p.toString();
            })
            .join('\n\n')
            .trim();
    }

    /**
     * @returns {string}
     */
    toString() {
        return this.toShowdown();
    }
}

export default PokemonTeamSet;
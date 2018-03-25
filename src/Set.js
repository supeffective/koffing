"use strict";

class Set {
    constructor(teams = []) {
        this.teams = teams;
    }

    toString() {
        return this.teams.map(function (p) {
            return p.toString();
        }).join('\n\n').trim();
    }
}

export default Set;
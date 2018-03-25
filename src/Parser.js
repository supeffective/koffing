"use strict";

import Team from "Team";
import Pokemon from "Pokemon";
import Set from "Set";

const regexes = {
    "team": /^=== \[(.*)\] (.*) ===$/,
    "gender": / \((F|M)\)/i,
    "item": / @ (.*)$/i,
    "name": /^([^()@]{2,})/i,
    "nickname_name": /^(.*) \(([^()]{2,})\) /i,
    "ability": /^Ability: (.*)$/i,
    "level": /^Level: ([0-9]{1,3})$/i,
    "shiny": /^Shiny: (Yes|No)$/i,
    "happiness": /^Happiness: ([0-9]{1,3})$/i,
    "eivs": /^([EI]Vs): (.*)$/i,
    "eivs_value": /^([0-9]+)\s{1,}(hp|atk|def|spa|spd|spe)$/i,
    "nature": /^(.*) Nature$/,
    "move": /^- (.*)$/i,
    is: function (content, regexName) {
        return content.match(this[regexName]) ? true : false;
    },
    get: function (content, regexName) {
        return this[regexName].exec(content);
    }
};

const parse = function (content) {
    let lines = content
        .trim()
        .split("\n")
        .map(function (line) {
            return line.trim();
        });
    let teams = [];
    let currTeam = null;
    let currPoke = null;
    let defaultTeamData = {name: "untitled", format: "gen7"};

    function savePoke() {
        if (!currTeam) {
            currTeam = new Team(defaultTeamData.name, defaultTeamData.format);
            teams.push(currTeam);
        }
        if (currPoke) {
            currTeam.pokemon.push(currPoke);
            currPoke = null;
        }
    }

    function assign(poke, line, key) {
        if (regexes.is(line, key)) {
            currPoke[key] = regexes.get(line, key)[1].trim();
        }
    }

    function assignMoves(poke, line) {
        if (regexes.is(line, 'move')) {
            currPoke.moves.push(regexes.get(line, 'move')[1].trim());
        }
    }

    function assignEivs(poke, line) {
        if (regexes.is(line, 'eivs')) {
            let data = regexes.get(line, 'eivs');
            let prop = data[1].toLowerCase();
            let values = data[2].split('/');
            values.forEach(function (stat) {
                let data = regexes.get(stat.trim().toLowerCase(), 'eivs_value');
                if (!data) {
                    throw Error("Invalid syntax for " + prop + ": " + line);
                }
                if (!poke[prop]) {
                    poke[prop] = {};
                }
                poke[prop][data[2]] = data[1];
            });
        }
    }

    /**
     * @param {Pokemon} poke
     * @param {String} line
     */
    function assignName(poke, line) {
        let value;

        if (regexes.is(line, 'nickname_name')) {
            value = regexes.get(line, 'nickname_name');
            poke.nickname = value[1].trim();
            poke.name = value[2].trim();
        } else if (regexes.is(line, 'name')) {
            value = regexes.get(line, 'name');
            poke.name = value[1].trim();
        }
    }

    lines.forEach(function (line) {
        if (regexes.is(line, "team")) {
            let teamData = regexes.get(line, "team");
            currTeam = new Team(teamData[2], teamData[1]);
            teams.push(currTeam);
            return;
        }
        if (line === "") {
            savePoke();
            return;
        }
        if (!currPoke) {
            currPoke = new Pokemon();
            assignName(currPoke, line);
        }

        assign(currPoke, line, "gender");
        assign(currPoke, line, "item");
        assign(currPoke, line, "ability");
        assign(currPoke, line, "level");
        assign(currPoke, line, "shiny");
        assign(currPoke, line, "happiness");
        assign(currPoke, line, "nature");
        assignMoves(currPoke, line);
        assignEivs(currPoke, line);
    });

    savePoke();

    return new Set(teams);
};

export default parse;
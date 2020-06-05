(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Koffing", function() { return /* binding */ src_Koffing; });
__webpack_require__.d(__webpack_exports__, "ShowdownParser", function() { return /* reexport */ src_ShowdownParser; });

// CONCATENATED MODULE: ./src/Pokemon.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pokemon = /*#__PURE__*/function () {
  function Pokemon() {
    _classCallCheck(this, Pokemon);

    /**
     * @type {String}
     */
    this.name = undefined;
    /**
     * @type {String}
     */

    this.nickname = undefined;
    /**
     * @type {String}
     */

    this.gender = undefined;
    /**
     * @type {String}
     */

    this.item = undefined;
    /**
     * @type {String}
     */

    this.ability = undefined;
    /**
     * @type {Number}
     */

    this.level = undefined;
    /**
     * @type {boolean}
     */

    this.shiny = undefined;
    /**
     * @type {Number}
     */

    this.happiness = undefined;
    /**
     * @type {String}
     */

    this.nature = undefined;
    /**
     * @type {{ hp:Number, atk:Number, def: Number, spa: Number, spd: Number, spe: Number}}
     */

    this.evs = undefined;
    /**
     * @type {{ hp:Number, atk:Number, def: Number, spa: Number, spd: Number, spe: Number}}
     */

    this.ivs = undefined;
    /**
     * @type {String[]}
     */

    this.moves = [];
  }
  /**
   * @param {object|Pokemon} obj
   * @returns {Pokemon}
   */


  _createClass(Pokemon, [{
    key: "toJson",

    /**
     * @param {Number} indentation
     * @returns {string}
     */
    value: function toJson() {
      var indentation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      return JSON.stringify(this, null, indentation);
    }
    /**
     * @returns {string}
     */

  }, {
    key: "toShowdown",
    value: function toShowdown() {
      var str = '';

      if (this.nickname) {
        str += "".concat(this.nickname, " (").concat(this.name, ")");
      } else {
        str += "".concat(this.name);
      }

      if (this.gender && this.gender.match(/^[MF]$/i)) {
        str += " (".concat(this.gender.toUpperCase(), ")");
      }

      if (this.item) {
        str += " @ ".concat(this.item);
      }

      str += "\n";

      if (!isNaN(this.level)) {
        str += "Level: ".concat(this.level, "\n");
      }

      if (this.ability) {
        str += "Ability: ".concat(this.ability, "\n");
      }

      if (this.shiny === true) {
        str += "Shiny: Yes\n";
      }

      if (!isNaN(this.happiness)) {
        str += "Happiness: ".concat(this.happiness, "\n");
      }

      if (this.nature) {
        str += "".concat(this.nature, " Nature\n");
      }

      if (this.evs) {
        var evs = this.evs;
        str += "EVs: " + ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'].filter(function (prop) {
          return !isNaN(evs[prop.toLowerCase()]);
        }).map(function (prop) {
          var val = evs[prop.toLowerCase()];
          return "".concat(val, " ").concat(prop);
        }).join(' / ') + '\n';
      }

      if (this.ivs) {
        var ivs = this.ivs;
        str += "IVs: " + ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'].filter(function (prop) {
          return !isNaN(ivs[prop.toLowerCase()]);
        }).map(function (prop) {
          var val = ivs[prop.toLowerCase()];
          return "".concat(val, " ").concat(prop);
        }).join(' / ') + '\n';
      }

      if (this.moves) {
        str += this.moves.map(function (move) {
          return "- ".concat(move);
        }).join("\n") + "\n";
      }

      return str.trim();
    }
    /**
     * @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.toShowdown();
    }
  }], [{
    key: "fromObject",
    value: function fromObject(obj) {
      var p = new Pokemon();
      p.name = obj.name;
      p.nickname = obj.nickname;
      p.gender = obj.gender;
      p.item = obj.item;
      p.ability = obj.ability;
      p.level = obj.level;
      p.shiny = obj.shiny;
      p.happiness = obj.happiness;
      p.nature = obj.nature;
      p.evs = obj.evs;
      p.ivs = obj.ivs;
      p.moves = obj.moves;
      return p;
    }
  }]);

  return Pokemon;
}();

/* harmony default export */ var src_Pokemon = (Pokemon);
// CONCATENATED MODULE: ./src/PokemonTeam.js


function PokemonTeam_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PokemonTeam_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PokemonTeam_createClass(Constructor, protoProps, staticProps) { if (protoProps) PokemonTeam_defineProperties(Constructor.prototype, protoProps); if (staticProps) PokemonTeam_defineProperties(Constructor, staticProps); return Constructor; }



var PokemonTeam_PokemonTeam = /*#__PURE__*/function () {
  /**
   * @param {string} format
   * @param {string} name
   * @param {string|undefined} folder
   */
  function PokemonTeam() {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gen7';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Untitled';
    var folder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    PokemonTeam_classCallCheck(this, PokemonTeam);

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


  PokemonTeam_createClass(PokemonTeam, [{
    key: "toJson",

    /**
     * @param {Number} indentation
     * @returns {string}
     */
    value: function toJson() {
      var indentation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      return JSON.stringify(this, null, indentation);
    }
    /**
     * @returns {string}
     */

  }, {
    key: "toShowdown",
    value: function toShowdown() {
      var name = this.folder ? "".concat(this.folder, "/").concat(this.name) : this.name;
      var str = "=== [".concat(this.format, "] ").concat(name, " ===\n\n");
      str += this.pokemon.map(function (p) {
        return p.toString();
      }).join('\n\n');
      return str.trim();
    }
    /**
     * @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.toShowdown();
    }
  }], [{
    key: "fromObject",
    value: function fromObject(obj) {
      var team = new PokemonTeam();
      team.name = obj.name;
      team.format = obj.format;
      team.folder = obj.folder;
      team.pokemon = obj.pokemon ? obj.pokemon.map(function (pokemon) {
        return src_Pokemon.fromObject(pokemon);
      }) : [];
      return team;
    }
  }]);

  return PokemonTeam;
}();

/* harmony default export */ var src_PokemonTeam = (PokemonTeam_PokemonTeam);
// CONCATENATED MODULE: ./src/PokemonTeamSet.js


function PokemonTeamSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PokemonTeamSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PokemonTeamSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) PokemonTeamSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) PokemonTeamSet_defineProperties(Constructor, staticProps); return Constructor; }



var PokemonTeamSet_PokemonTeamSet = /*#__PURE__*/function () {
  /**
   * @param {PokemonTeam[]} teams
   */
  function PokemonTeamSet() {
    var teams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    PokemonTeamSet_classCallCheck(this, PokemonTeamSet);

    this.teams = teams;
  }
  /**
   * @param {object|PokemonTeamSet} obj
   * @returns {PokemonTeamSet}
   */


  PokemonTeamSet_createClass(PokemonTeamSet, [{
    key: "toJson",

    /**
     * @param {Number} indentation
     * @returns {string}
     */
    value: function toJson() {
      var indentation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      return JSON.stringify(this, null, indentation);
    }
    /**
     * @returns {string}
     */

  }, {
    key: "toShowdown",
    value: function toShowdown() {
      return this.teams.map(function (p) {
        return p.toString();
      }).join('\n\n').trim();
    }
    /**
     * @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.toShowdown();
    }
  }], [{
    key: "fromObject",
    value: function fromObject(obj) {
      var teamSet = new PokemonTeamSet();
      teamSet.teams = obj.teams ? obj.teams.map(function (team) {
        return src_PokemonTeam.fromObject(team);
      }) : [];
      return teamSet;
    }
  }]);

  return PokemonTeamSet;
}();

/* harmony default export */ var src_PokemonTeamSet = (PokemonTeamSet_PokemonTeamSet);
// CONCATENATED MODULE: ./src/ShowdownParser.js


function ShowdownParser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ShowdownParser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ShowdownParser_createClass(Constructor, protoProps, staticProps) { if (protoProps) ShowdownParser_defineProperties(Constructor.prototype, protoProps); if (staticProps) ShowdownParser_defineProperties(Constructor, staticProps); return Constructor; }




/**
 * Ported from Pokemon Showdown Client's exportTeam/importTeam functions.
 *
 * @see https://github.com/Zarel/Pokemon-Showdown-Client/blob/8994e9e/js/storage.js
 */

var ShowdownParser_ShowdownParser = /*#__PURE__*/function () {
  /**
   * @param {String} code
   */
  function ShowdownParser(code) {
    ShowdownParser_classCallCheck(this, ShowdownParser);

    /**
     * @type {String}
     */
    this.code = code + "";
  }
  /**
   * @returns {PokemonTeamSet}
   */


  ShowdownParser_createClass(ShowdownParser, [{
    key: "parse",
    value: function parse() {
      var regexes = ShowdownParser.regexes;
      /**
       * @type {PokemonTeam[]}
       */

      var teams = [];
      /**
       * @type {{team: PokemonTeam, pokemon: Pokemon}}
       */

      var current = {
        team: null,
        pokemon: null
      };
      /**
       * @type {string[]}
       */

      var lines = this.code.trim().split("\n").map(function (line) {
        return line.trim();
      });
      var $this = this;
      lines.forEach(function (line) {
        // New Team
        if (line.match(regexes.team)) {
          // Start new team
          current.team = new src_PokemonTeam();

          $this._parseTeam(line, current.team);

          teams.push(current.team);
          return;
        } // Separator


        if (line === '' || line.match(/^[- ]+$/)) {
          // Line break (empty or as dashes separator), previous Pokemon definition ended.
          $this._saveCurrent(teams, current);

          return;
        } // New Pokemon + nickname, name, gender and item


        if (!current.pokemon) {
          current.pokemon = new src_Pokemon();

          $this._parseNameLine(line, current.pokemon);

          return;
        } // Ability, Level, etc.


        if ($this._parseKeyValuePairs(line, current.pokemon)) {
          return;
        } // EVs and IVs


        if ($this._parseEvsIvs(line, current.pokemon)) {
          return;
        } // Moves


        if (current.pokemon.moves.length < 4 && line.match(regexes.move)) {
          current.pokemon.moves.push(regexes.move.exec(line)[1].trim());
        }
      });

      this._saveCurrent(teams, current);

      return new src_PokemonTeamSet(teams);
    }
    /**
     * @param {string} line
     * @param {PokemonTeam} team
     * @private
     */

  }, {
    key: "_parseTeam",
    value: function _parseTeam(line, team) {
      var rg = ShowdownParser.regexes;
      var teamData = rg.team.exec(line);
      var teamNames = teamData[2].split('/');
      var teamName, teamFolder;

      if (teamNames.length > 1) {
        teamFolder = teamNames.shift();
        teamName = teamNames.join('/');
      } else {
        teamName = teamData[2];
      }

      team.format = teamData[1].trim();
      team.name = teamName.trim();
      team.folder = teamFolder ? teamFolder.trim() : undefined;
    }
    /**
     * @param {string} line
     * @param {Pokemon} pokemon
     * @private
     */

  }, {
    key: "_parseNameLine",
    value: function _parseNameLine(line, pokemon) {
      var rg = ShowdownParser.regexes;

      if (line.match(rg.nickname_name)) {
        // has nickname?
        var nameMatches = rg.nickname_name.exec(line);
        pokemon.nickname = nameMatches[1].trim();
        pokemon.name = nameMatches[2].trim();
      } else if (line.match(rg.name)) {
        var _nameMatches = rg.name.exec(line);

        pokemon.name = _nameMatches[1].trim();
      }

      if (line.match(rg.gender)) {
        pokemon.gender = rg.gender.exec(line)[1].toUpperCase().trim();
      }

      if (line.match(rg.item)) {
        pokemon.item = rg.item.exec(line)[1].trim();
      }
    }
    /**
     * @param {string} line
     * @param {Pokemon} pokemon
     * @returns {boolean} True if it matched some, false otherwise
     * @private
     */

  }, {
    key: "_parseEvsIvs",
    value: function _parseEvsIvs(line, pokemon) {
      var rg = ShowdownParser.regexes;

      if (line.match(rg.eivs)) {
        var data = rg.eivs.exec(line);
        var prop = data[1].toLowerCase();
        var values = data[2].split('/');
        var limit = prop === 'evs' ? 255 : 31;
        values.forEach(function (stat) {
          var statData = rg.eivs_value.exec(stat.trim().toLowerCase());

          if (!statData) {
            console.error("Invalid syntax for " + prop + ": " + stat);
            return;
          }

          if (!pokemon[prop]) {
            pokemon[prop] = {};
          }

          pokemon[prop][statData[2]] = parseFloat(statData[1]);

          if (pokemon[prop][statData[2]] > limit) {
            pokemon[prop][statData[2]] = limit;
          }
        });
        return true;
      }

      return false;
    }
    /**
     * @param {string} line
     * @param {Pokemon} pokemon
     * @returns {boolean} True if it matched some, false otherwise
     * @private
     */

  }, {
    key: "_parseKeyValuePairs",
    value: function _parseKeyValuePairs(line, pokemon) {
      var rg = ShowdownParser.regexes;
      return ['ability', 'level', 'shiny', 'happiness', 'nature'].some(function (key) {
        if (line.match(rg[key])) {
          pokemon[key] = rg[key].exec(line)[1].trim();

          if (!isNaN(pokemon[key])) {
            pokemon[key] = parseFloat(pokemon[key]);
          }

          if (key === 'happiness' && pokemon[key] > 255) {
            pokemon[key] = 255;
          }

          if (key === 'level' && pokemon[key] < 1) {
            pokemon[key] = 1;
          }

          if (key === 'level' && pokemon[key] > 100) {
            pokemon[key] = 100;
          }

          if (key === 'shiny') {
            pokemon[key] = !!pokemon[key].match(/yes/i);
          }

          return true;
        }

        return false;
      });
    }
    /**
     * Saves the current state of the parsed team.
     *
     * @param {Array} teams
     * @param {{team: PokemonTeam, pokemon: Pokemon}} current
     * @returns {ShowdownParser}
     * @private
     */

  }, {
    key: "_saveCurrent",
    value: function _saveCurrent(teams, current) {
      if (!current.team) {
        // Create a team if there is no current one
        current.team = new src_PokemonTeam();
        teams.push(current.team);
      }

      if (current.pokemon) {
        // Create a team if there is no current one
        current.team.pokemon.push(current.pokemon);
        current.pokemon = null;
      }

      return this;
    }
    /**
     * Sanitizes and re-formats / prettifies the Showdown code
     *
     * @returns {ShowdownParser}
     */

  }, {
    key: "format",
    value: function format() {
      this.code = this.parse().toString();
      return this;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.code;
    }
  }]);

  return ShowdownParser;
}();

ShowdownParser_ShowdownParser.regexes = {
  team: /^===\s+\[(.*)\]\s+(.*)\s+===$/,
  gender: /\((F|M)\)/i,
  item: /@\s?(.*)$/i,
  name: /^([^()=@]{2,})/i,
  nickname_name: /^([^()=@]*)\s+\(([^()=@]{2,})\)/i,
  ability: /^Ability:\s?(.*)$/i,
  level: /^Level:\s?([0-9]{1,3})$/i,
  shiny: /^Shiny:\s?(Yes|No)$/i,
  happiness: /^Happiness:\s?([0-9]{1,3})$/i,
  eivs: /^([EI]Vs):\s?(.*)$/i,
  eivs_value: /^([0-9]+)\s+(hp|atk|def|spa|spd|spe)$/i,
  nature: /^(.*)\s+Nature$/,
  move: /^[-~]\s?(.*)$/i
};
/* harmony default export */ var src_ShowdownParser = (ShowdownParser_ShowdownParser);
// CONCATENATED MODULE: ./src/index.js


function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }






var src_Koffing = /*#__PURE__*/function () {
  function Koffing() {
    src_classCallCheck(this, Koffing);
  }

  src_createClass(Koffing, null, [{
    key: "parse",

    /**
     * Converts from Showdown to a PokemonTeamSet object.
     *
     * @param {String|Pokemon|PokemonTeam|PokemonTeamSet|ShowdownParser} data Showdown code or object
     * @returns {PokemonTeamSet}
     */
    value: function parse(data) {
      if (data instanceof src_PokemonTeamSet || data instanceof src_PokemonTeam || data instanceof src_Pokemon) {
        return data;
      }

      if (data instanceof src_ShowdownParser) {
        return data.parse();
      }

      return new src_ShowdownParser(data).parse();
    }
    /**
     * Prettifies and sanitizes the given Showdown code.
     *
     * @param {String|Pokemon|PokemonTeam|PokemonTeamSet|ShowdownParser} data Showdown code or object
     * @returns {String}
     */

  }, {
    key: "format",
    value: function format(data) {
      return this.parse(data).toShowdown();
    }
    /**
     * Converts from Showdown to JSON code.
     *
     * @param {String|Pokemon|PokemonTeam|PokemonTeamSet|ShowdownParser} data Showdown code or object
     * @returns {String}
     */

  }, {
    key: "toJson",
    value: function toJson(data) {
      return this.parse(data).toJson();
    }
    /**
     * Converts from JSON to Showdown code.
     *
     * @param {String|Object|Pokemon|PokemonTeam|PokemonTeamSet|ShowdownParser} data JSON code or object
     * @returns {String}
     */

  }, {
    key: "toShowdown",
    value: function toShowdown(data) {
      if (data instanceof src_PokemonTeamSet || data instanceof src_PokemonTeam || data instanceof src_Pokemon) {
        return data.toShowdown();
      }

      if (data instanceof src_ShowdownParser) {
        return data.parse().format();
      }

      if (typeof value === 'string' || value instanceof String) {
        data = JSON.parse(data);
      }

      return src_PokemonTeamSet.fromObject(JSON.parse(data)).toShowdown();
    }
  }]);

  return Koffing;
}();



/***/ })
/******/ ]);
});
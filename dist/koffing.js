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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pokemon = __webpack_require__(1);

var _Pokemon2 = _interopRequireDefault(_Pokemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokemonTeam = function () {
  /**
   * @param {string} format
   * @param {string} name
   * @param {string|undefined} folder
   */
  function PokemonTeam() {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gen7';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Untitled';
    var folder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, PokemonTeam);

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


  _createClass(PokemonTeam, [{
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
      var name = this.folder ? this.folder + "/" + this.name : this.name;
      var str = "=== [" + this.format + "] " + name + " ===\n\n";

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
        return _Pokemon2.default.fromObject(pokemon);
      }) : [];

      return team;
    }
  }]);

  return PokemonTeam;
}();

exports.default = PokemonTeam;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pokemon = function () {
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
                str += this.nickname + " (" + this.name + ")";
            } else {
                str += "" + this.name;
            }

            if (this.gender && this.gender.match(/^[MF]$/i)) {
                str += " (" + this.gender.toUpperCase() + ")";
            }

            if (this.item) {
                str += " @ " + this.item;
            }

            str += "\n";

            if (!isNaN(this.level)) {
                str += "Level: " + this.level + "\n";
            }

            if (this.ability) {
                str += "Ability: " + this.ability + "\n";
            }

            if (this.shiny === true) {
                str += "Shiny: Yes\n";
            }

            if (!isNaN(this.happiness)) {
                str += "Happiness: " + this.happiness + "\n";
            }

            if (this.nature) {
                str += this.nature + " Nature\n";
            }

            if (this.evs) {
                var evs = this.evs;
                str += "EVs: " + ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'].filter(function (prop) {
                    return !isNaN(evs[prop.toLowerCase()]);
                }).map(function (prop) {
                    var val = evs[prop.toLowerCase()];
                    return val + " " + prop;
                }).join(' / ') + '\n';
            }

            if (this.ivs) {
                var ivs = this.ivs;
                str += "IVs: " + ['HP', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'].filter(function (prop) {
                    return !isNaN(ivs[prop.toLowerCase()]);
                }).map(function (prop) {
                    var val = ivs[prop.toLowerCase()];
                    return val + " " + prop;
                }).join(' / ') + '\n';
            }

            if (this.moves) {
                str += this.moves.map(function (move) {
                    return "- " + move;
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

exports.default = Pokemon;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PokemonTeam = __webpack_require__(0);

var _PokemonTeam2 = _interopRequireDefault(_PokemonTeam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokemonTeamSet = function () {
    /**
     * @param {PokemonTeam[]} teams
     */
    function PokemonTeamSet() {
        var teams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, PokemonTeamSet);

        this.teams = teams;
    }

    /**
     * @param {object|PokemonTeamSet} obj
     * @returns {PokemonTeamSet}
     */


    _createClass(PokemonTeamSet, [{
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
                return _PokemonTeam2.default.fromObject(team);
            }) : [];

            return teamSet;
        }
    }]);

    return PokemonTeamSet;
}();

exports.default = PokemonTeamSet;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pokemon = __webpack_require__(1);

var _Pokemon2 = _interopRequireDefault(_Pokemon);

var _PokemonTeam = __webpack_require__(0);

var _PokemonTeam2 = _interopRequireDefault(_PokemonTeam);

var _PokemonTeamSet = __webpack_require__(2);

var _PokemonTeamSet2 = _interopRequireDefault(_PokemonTeamSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ported from Pokemon Showdown Client's exportTeam/importTeam functions.
 *
 * @see https://github.com/Zarel/Pokemon-Showdown-Client/blob/8994e9e/js/storage.js
 */
var ShowdownParser = function () {
    /**
     * @param {String} code
     */
    function ShowdownParser(code) {
        _classCallCheck(this, ShowdownParser);

        /**
         * @type {String}
         */
        this.code = code + "";
    }

    /**
     * @returns {PokemonTeamSet}
     */


    _createClass(ShowdownParser, [{
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
                    current.team = new _PokemonTeam2.default();
                    $this._parseTeam(line, current.team);
                    teams.push(current.team);
                    return;
                }

                // Separator
                if (line === '' || line.match(/^[- ]+$/)) {
                    // Line break (empty or as dashes separator), previous Pokemon definition ended.
                    $this._saveCurrent(teams, current);
                    return;
                }

                // New Pokemon + nickname, name, gender and item
                if (!current.pokemon) {
                    current.pokemon = new _Pokemon2.default();
                    $this._parseNameLine(line, current.pokemon);
                    return;
                }

                // Ability, Level, etc.
                if ($this._parseKeyValuePairs(line, current.pokemon)) {
                    return;
                }

                // EVs and IVs
                if ($this._parseEvsIvs(line, current.pokemon)) {
                    return;
                }

                // Moves
                if (current.pokemon.moves.length < 4 && line.match(regexes.move)) {
                    current.pokemon.moves.push(regexes.move.exec(line)[1].trim());
                }
            });

            this._saveCurrent(teams, current);

            return new _PokemonTeamSet2.default(teams);
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
            var teamName = void 0,
                teamFolder = void 0;

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
                current.team = new _PokemonTeam2.default();
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

ShowdownParser.regexes = {
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

exports.default = ShowdownParser;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ShowdownParser = exports.Koffing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pokemon = __webpack_require__(1);

var _Pokemon2 = _interopRequireDefault(_Pokemon);

var _PokemonTeam = __webpack_require__(0);

var _PokemonTeam2 = _interopRequireDefault(_PokemonTeam);

var _PokemonTeamSet = __webpack_require__(2);

var _PokemonTeamSet2 = _interopRequireDefault(_PokemonTeamSet);

var _ShowdownParser = __webpack_require__(3);

var _ShowdownParser2 = _interopRequireDefault(_ShowdownParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Koffing = function () {
    function Koffing() {
        _classCallCheck(this, Koffing);
    }

    _createClass(Koffing, null, [{
        key: "parse",

        /**
         * Converts from Showdown to a PokemonTeamSet object.
         *
         * @param {String|Pokemon|PokemonTeam|PokemonTeamSet|ShowdownParser} data Showdown code or object
         * @returns {PokemonTeamSet}
         */
        value: function parse(data) {
            if (data instanceof _PokemonTeamSet2.default || data instanceof _PokemonTeam2.default || data instanceof _Pokemon2.default) {
                return data;
            }
            if (data instanceof _ShowdownParser2.default) {
                return data.parse();
            }
            return new _ShowdownParser2.default(data).parse();
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
            if (data instanceof _PokemonTeamSet2.default || data instanceof _PokemonTeam2.default || data instanceof _Pokemon2.default) {
                return data.toShowdown();
            }
            if (data instanceof _ShowdownParser2.default) {
                return data.parse().format();
            }
            if (typeof value === 'string' || value instanceof String) {
                data = JSON.parse(data);
            }
            return _PokemonTeamSet2.default.fromObject(JSON.parse(data)).toShowdown();
        }
    }]);

    return Koffing;
}();

exports.Koffing = Koffing;
exports.ShowdownParser = _ShowdownParser2.default;

/***/ })
/******/ ]);
});
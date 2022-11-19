class Pokemon {
  constructor() {
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
     * @type {String}
     */
    this.teratype = undefined;
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
  static fromObject(obj) {
    let p = new Pokemon();
    p.name = obj.name;
    p.nickname = obj.nickname;
    p.gender = obj.gender;
    p.item = obj.item;
    p.ability = obj.ability;
    p.teratype = obj.teratype;
    p.level = obj.level;
    p.shiny = obj.shiny;
    p.happiness = obj.happiness;
    p.nature = obj.nature;
    p.evs = obj.evs;
    p.ivs = obj.ivs;
    p.moves = obj.moves;

    return p;
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
    let str = "";

    if (this.nickname) {
      str += `${this.nickname} (${this.name})`;
    } else {
      str += `${this.name}`;
    }

    if (this.gender && this.gender.match(/^[MF]$/i)) {
      str += ` (${this.gender.toUpperCase()})`;
    }

    if (this.item) {
      str += ` @ ${this.item}`;
    }

    str += "\n";

    if (!isNaN(this.level)) {
      str += `Level: ${this.level}\n`;
    }

    if (this.ability) {
      str += `Ability: ${this.ability}\n`;
    }

    if (this.shiny === true) {
      str += `Shiny: Yes\n`;
    }

    if (this.teratype) {
      str += `Tera Type: ${this.teratype}\n`;
    }

    if (!isNaN(this.happiness)) {
      str += `Happiness: ${this.happiness}\n`;
    }

    if (this.nature) {
      str += `${this.nature} Nature\n`;
    }

    if (this.evs) {
      let evs = this.evs;
      str +=
        `EVs: ` +
        ["HP", "Atk", "Def", "SpA", "SpD", "Spe"]
          .filter(function (prop) {
            return !isNaN(evs[prop.toLowerCase()]);
          })
          .map(function (prop) {
            let val = evs[prop.toLowerCase()];
            return `${val} ${prop}`;
          })
          .join(" / ") +
        "\n";
    }

    if (this.ivs) {
      let ivs = this.ivs;
      str +=
        `IVs: ` +
        ["HP", "Atk", "Def", "SpA", "SpD", "Spe"]
          .filter(function (prop) {
            return !isNaN(ivs[prop.toLowerCase()]);
          })
          .map(function (prop) {
            let val = ivs[prop.toLowerCase()];
            return `${val} ${prop}`;
          })
          .join(" / ") +
        "\n";
    }

    if (this.moves) {
      str +=
        this.moves
          .map(function (move) {
            return `- ${move}`;
          })
          .join("\n") + "\n";
    }

    return str.trim();
  }

  /**
   * @returns {string}
   */
  toString() {
    return this.toShowdown();
  }
}

export default Pokemon;

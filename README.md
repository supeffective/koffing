# Koffing
Koffing is a Pokemon Showdown Team parser that converts your strategies to 
machine-readable JSON code and also from JSON back to Showdown.

![koffing](docs/assets/img/koffing.png) 🔁![koffing](docs/assets/img/koffing-shiny.png)

## Installation

As a package:
```bash
npm i --save koffing
```

In the browser, using a CDN:
```html
<script src="https://cdn.rawgit.com/capsulemonsters/koffing/0.3.0/dist/koffing.js"></script>
```

### Usage
```js
"use strict";

import {Koffing} from 'koffing';

const teamCode = `
=== [gen7] Folder 1/Example Team ===

Smogon (Koffing) (F) @ Eviolite
Level: 5
Ability: Levitate
Shiny: Yes
Happiness: 255
EVs: 36 HP / 236 Def / 236 SpD
IVs: 31 HP / 30 Atk / 31 SpA / 30 SpD / 31 Spe
Bold Nature
- Will-O-Wisp
- Pain Split
- Sludge Bomb
- Fire Blast

Weezing @ Black Sludge
Ability: Levitate
EVs: 252 HP / 160 Def / 96 Spe
Bold Nature
- Sludge Bomb
- Will-O-Wisp
- Toxic Spikes
- Taunt
`;


const parsedTeam = Koffing.parse(teamCode);

// This will log a PokemonTeamSet object:
console.log(parsedTeam);
// Convert it back to the Showdown format (prettified):
console.log(parsedTeam.toShowdown());
// which is the same as:
console.log(parsedTeam.toString());
// and the same as:
console.log(parsedTeam + "");
// You can also convert the object to JSON:
console.log(parsedTeam.toJson());
// which is the same as:
console.log(Koffing.toJson(teamCode));
```

`Koffing` also has other methods like `prettify`, `toJson` and `toShowdown`.

The above example is using ES6+ syntax, but you can also use it in NodeJS with 
`const Koffing = require('koffing');`, as well as in the browser loading the
`dist/koffing.js` script and using the global `Koffing` object (directly in this
case, without the import shown in the example).


You can also try the [Online Parser](https://capsulemonsters.github.io/koffing), which does not require you to download
any script if what you want is a one-off conversion.

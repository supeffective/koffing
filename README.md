# Koffing

Koffing is a Pokemon Showdown Team parser that converts your strategies to 
machine-readable JSON code.

## Installation

As a package:
```bash
npm i --save koffing
```

In the browser, using a CDN:
```html
<script src="https://cdn.rawgit.com/capsulemonsters/koffing/0.1.0/dist/koffing.js"></script>
```

### Usage
```js
"use strict";

import {Koffing} from 'koffing';

const team = `=== [gen7] Example Team ===

Koffing @ Eviolite
Level: 5
Ability: Levitate
EVs: 36 HP / 236 Def / 236 SpD
Bold Nature
- Will-O-Wisp
- Pain Split
- Sludge Bomb
- Fire Blast`;


const parsedTeam = Koffing.parse(team);

// This will log a PokemonTeamSet object:
console.log(parsedTeam);


// Convert it back to the Showdown format:
console.log(Koffing.stringify(parsedTeam));
// which is the same as:
console.log(parsedTeam.toString());
// and:
console.log(parsedTeam);
```

The above example is using ES6+ syntax, but can also use it in NodeJS with 
`const Koffing = require('koffing');`, as well as in the browser loading the
`koffing.js` script and using the global `Koffing` object (directly in this
case, without the import shown in the example).


You can also try the [Online Parser](https://capsulemonsters.github.io/koffing), which does not require you to download
any script if what you want is a one-off conversion.

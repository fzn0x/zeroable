## NaN = 0, it should be.

**Faster** than **Number**,**parseInt**, and **parseFloat**.

> Wrapped to make it look clean.

```bash
npm install zeroable
```

ES6

```js
import zeroable from "zeroable";

console.log(zeroable("SSSS")); // returns 0
console.log(zeroable("11.1")); // returns 11.1
console.log(zeroable()); // returns 0
```

CJS

```js
const zeroable = require("zeroable");

console.log(zeroable("SSSS")); // returns 0
console.log(zeroable("11.1")); // returns 11.1
console.log(zeroable()); // returns 0
```

This library using [MIT License](./LICENSE.md)

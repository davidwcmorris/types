"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delegate_1 = require("../delegate");
const d1 = (x) => x + 1;
const d2 = (x) => x * 2;
const multi = (0, delegate_1.delegate)(d1, d2);
console.log(multi(5)); // [6, 10]
//# sourceMappingURL=index.js.map
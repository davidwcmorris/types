import { delegate } from "../delegate";

const d1 = (x: number) => x + 1;
const d2 = (x: number) => x * 2;

const multi = delegate(d1, d2);

console.log(multi(5)); // [6, 10]
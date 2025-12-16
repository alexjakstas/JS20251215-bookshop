// 4. Parašykite funkciją, kuri išvestų paskutinės knygos pavadinimą ir kainą.

import { books } from "./dataInfo.js";

let last = books[books.length - 1];

console.log(last);
// 7.Parašykite kodą, kuris išrikiuotų knygas nuo pigiausios iki brangiausios.


import { books } from "./dataInfo.js";

books.sort((a,b) => a.price - b.price);

console.log(books);
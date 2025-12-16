// 1. Parašykite funkciją, kuri atspausdintų visą knygų sąrašą (knygos eilės numerį ir pavadinimą. Panaudokite metodą map.

import { books } from "./dataInfo.js";

 books.map(({ title, price }) => ({ [title]: price }));

console.log(books);
// 8. Analogiškai išrikiuokite knygas pagal pavadinimus, nuo A iki Z. Prieš tai pakoreguokite knygų pavadinimus masyve.

// nuo A iki Z

// nuo Z iki A

import { books } from "./dataInfo.js";

books.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))

console.log(books);
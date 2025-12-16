
// 2. Parašykite funkciją, kuri paskaičiuotų, kiek knygų yra lentynoje.

import { books } from "./dataInfo.js";


    let count;
    
    for (let i = 1; i >= books.length; i++) {
        count += i;
    }
 
console.log(count);
// 5. Parašykite funkciją suskaičiuojančią, už kiek eurų yra knygų knygyne.



import { books } from "./dataInfo.js";

let totalAmount = books.reduce((n, {price}) => n + price, 0);

console.log(totalAmount.toFixed(2));
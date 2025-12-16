// 9.Atspausdinkite knygas, kurios yra brangesnės nei 7,5 eur. Panaudokite metodą filter().


import { books } from "./dataInfo.js";

let newArray = books.filter(function (object) {
  return object.price > 7.5
});

    console.log(newArray);
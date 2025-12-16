// 6. Parašykite funkciją, kuri apskaičiuotų 25 % nuolaidą knygoms, kurių kaina didesnė nei 10 eurų ir atspausdintų:


import { books } from "./dataInfo.js";

function reducePrice(bookList) {
    const discount = 0.25; 
    const priceMoreThen = 10;
    bookList.forEach(books => {
        let newPrice = 0; 

        if (books.price > priceMoreThen) {
            newPrice = books.price * (1 - discount);

            console.log(
                `Knyga: ${books.title}:` +
                ` Sena kaina: ${books.price.toFixed(2)} ` +
                ` Pardavimo kaina: ${newPrice.toFixed(2)} pritaikyta nuolaida -25%.`
            );
        }
    });
}
    reducePrice(books);

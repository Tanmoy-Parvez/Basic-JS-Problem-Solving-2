/* 
3. Write an array with the prices of all the books you have. You have to skip the books that cost 200 taka or more. And have to return the cost of the rest of the books.
*/

const books_price = [150, 190, 205, 110, 255, 100, 220, 90, 300]

const books_under_200TK = [];

for (let i = 0; i < books_price.length; i++) {
    const price = books_price[i];
    if (price < 200) {
        books_under_200TK.push(price)
    }
}

console.log("Books price under 200 Taka: ", books_under_200TK);
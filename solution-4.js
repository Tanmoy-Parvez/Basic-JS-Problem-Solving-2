/* 
4. Write a function that takes the price of two books you have and returns the total price of the books.
*/

function totalPrice(book_1, book_2) {
    const total = book_1 + book_2;
    return total;
}

const result = totalPrice(250, 190);
console.log(result);
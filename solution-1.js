/* 
1. Create an array of even numbers and an array of odd numbers from the numbers 1 to 100 using for or while loop.
*/

let even_numbers_array = [];
let odd_numbers_array = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        even_numbers_array.push(i)
    }
    else (
        odd_numbers_array.push(i)
    )

}

console.log("Array of even numbers", even_numbers_array);

console.log("Array of odd numbers", odd_numbers_array);
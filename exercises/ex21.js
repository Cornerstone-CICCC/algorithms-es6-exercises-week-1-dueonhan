/*
Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
TIP: The 1st element of any array has an index of 0.

Afterwards, print out the prices array to the console.
*/

let prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
        prices[0] = 0
    } else if (i === 2) {
        prices[2] = 0
    } else if (i === 6) {
        prices[6] = 0
    }
    console.log(prices[i]);
}
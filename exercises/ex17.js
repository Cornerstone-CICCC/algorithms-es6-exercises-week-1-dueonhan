/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of 
"ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

function laugh(num) {
    let sum = "";

    for (let i = 0; i < num; i++) {
        //console.log("num:" + i);
        sum += "ha";
    }
    return sum + '!';
}

console.log(laugh(5));
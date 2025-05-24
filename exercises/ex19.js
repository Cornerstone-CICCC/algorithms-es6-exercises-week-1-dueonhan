/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/


function laugh(num) {
    let sum = "";

    for (let i = 0; i < num; i++) {
        //console.log("num:" + i);
        sum += "ha";
    }
    return sum + '!';
}

//console.log(laugh(5));

function emotions(word, callback) {
    console.log("callback:" + callback)
    console.log(laugh(2))

    let strings = `I am ${word} ,${callback}`
    return strings;
}

console.log(emotions("happy", laugh(2)))

/*
Create an array called crew to organize the Serenity’s crew and set it equal to the variables below . 
You don't need to type out the actual strings, just use the provided variables.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
Then, print the crew array to the console.
*/


let crew = [
    ["captain", "Mal"],
    ["second", "Zoe"],
    ["pilot", "Wash"],
    ["companion", "Inara"],
    ["mercenary", "Jayne"],
    ["mechanic", "Kaylee"],
]

for (let i = 0; i < crew.length; i++) {

    console.log(crew[i]);

}


let crew2 = [
    "captain", "Mal", "second", "Zoe", "pilot", "Wash", "companion", "Inara", "mercenary", "Jayne", "mechanic", "Kaylee",
]

for (let j = 0; j < crew2.length; j++) {
    console.log(crew2[j]);
}
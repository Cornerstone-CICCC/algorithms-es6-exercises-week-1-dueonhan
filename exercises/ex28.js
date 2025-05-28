/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

let messages = []
let counting = 0;


function postMessage(message) {
    messages.push(message);
    return messages;

}

function deleteMessage(index) {
    //messages.splice(index)

    for (let i = 0; i < messages.length; i++) {
        if (messages[i] === index) {
            messages.splice(i, 1);
        }
    }

    return messages;
}

function addFriend() {
    counting += 1;
    return counting;
}

function removeFriend() {
    counting -= 1;
    return counting;
}


console.log(postMessage("hello"))
console.log(postMessage("hello2"))
console.log(postMessage("hello3"))
console.log(postMessage("hello4"))

console.log(deleteMessage("hello2"))


console.log(addFriend())
console.log(addFriend())
console.log(addFriend())
console.log(addFriend())
console.log(addFriend())

console.log(removeFriend())
console.log(removeFriend())
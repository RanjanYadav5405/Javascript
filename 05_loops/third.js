// for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

//==============================================================

// const greeting = "Hello world!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

//=========================================================================

// Maps: It is unque and neglete duplicate value using for of loop

const map = new Map();
map.set("NP", "Nepal")
map.set("In", "India")
map.set("Ch", "China")
map.set("Ch", "China")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key,':>', value);
    
// }

//===========================================================================

// for of loop can't access Object

const myObject = {
    game1 : "Freefire",
    game2 : "Pubg"
}

// for (const [key, value] of myObject) {
//     console.log(key,':>', value);
    
// }
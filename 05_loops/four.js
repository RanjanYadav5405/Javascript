// for in loop

// for in loop can access object but for of can't access

const myObject ={
    js: 'Javascript',
    py: 'Python',
    java: 'Java',
    Cpp: 'C++'
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

//===================================================================

const programming = ["js","rb","py","java"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

//======================================================================

// In for in loop they can't give output and error
const map= new Map();
map.set('js','Javascript');
map.set('py','Python');
map.set('java','Java');
map.set('Cpp','C++');

for (const key in map) {
   console.log(key);
}
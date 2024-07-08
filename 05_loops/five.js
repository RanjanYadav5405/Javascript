// foreach loop

const coding = ["js","Java","Python","cpp"]

// using function inside foreach loop and we can also user different function
coding.forEach(function(val){
    // console.log(val);
})

//==================================================================

//different arrow function
coding.forEach((item) =>{
    // console.log(item);

})

//============================================================================
//different function
// we can also use function outside and call inside dor each loop

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe);

//============================================================================

coding.forEach((item, index,arr)=>{
    // console.log(item, index, arr);
})

//==========================================================================
// using multiple Object

const myCoding= [
    {
        name:"js",
        age: 20
    },
    {
        name:"Java",
        age: 30
    },
    {
        name:"Python",
        age: 40
    },
    {
        name:"cpp",
        age: 50
    }
]
myCoding.forEach((item) =>{
    console.log(item);
})
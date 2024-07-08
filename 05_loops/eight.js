// Using reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
    // console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal)

//===================================================

// without using object if I have to use obkect then i have to write return

const myTotal = myNums.reduce((acc,curr) => acc +curr,0)
// console.log(myTotal);

//=====================================================

const shoppingCart =[
    {
        itemName : "Apple",
        price : 100
    },
    {
        itemName : "Banana",
        price : 50
    },
    {
        itemName : "Orange",
        price : 200
    },
    {
        itemName : "Mango",
        price : 300
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(priceToPay);
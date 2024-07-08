// filter


const coding = ["js","ruby","java","python"]

// const values = coding.forEach((item) =>{
//     console.log(item);
//      return item;
// })
// console.log(values);

//==================================================================
// filter example and it only check condition like greater and less and equal but you can't add number and multiply

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) =>{
   return num > 4
})
// console.log(newNums)

//================================================================
// using forEach is doing loop same thing but it is difficult ot write code

myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})

// console.log(newNums);

//=====================================================================

// object using filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userBooks = books.filter((bk) => bk.genre === 'History')

usernooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre ==="History"
})
console.log(userBooks);
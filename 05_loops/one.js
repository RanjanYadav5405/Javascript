// for

// for(let i=0;i<=10;i++){
//     const element = i;
//     if(element ==5){
//         console.log(element);
//     }
//     console.log(element);
// }

// console.log(element);


// for(let i= 1; i<=10;i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=1;j<=10;j++){
//         console.log(`Inner loop value ${j} and oouter loop ${i}`);
        
//     }
// }

//====================================================================

// let myArray = ["flash","batman","superman"];
// console.log(myArray.length);
// for(let index=0; index< myArray.length; index++){
//  console.log(myArray[index]);
// }

//==========================================================

// break and continue

// for (let index = 1; index <=20; index++){
//     if(index ==5){
//         console.log(`Detected 5`);
//         break;
//     }
   
// console.log(`value of i is ${index}`)
// }

//===============================================================
// continue
for(let index = 1; index <=20;index++){
    if(index ==7){
        console.log(`Detected 7`);
        continue
    }                            
    console.log(`value of i is ${index}`);
}

//=========================================
//triangle

// for(let i=1; i<=5;i++){
//     let row = "";
//     for(let j=1; j<=i;j++){
//         // row +="*";
//         row = row+"*";
//     }
//     console.log(row);
// }
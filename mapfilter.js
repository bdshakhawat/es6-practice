const numbers = [4,5,6,7,8]
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// // }
// // function square(element){
// //     const result = element * element;
// //     return result;

// }

// const result = numbers.map(function(element, index, array){
//     return element * element;
//     // const result = element * element;
//     // return result;
//     // console.log(element,index,array);
// })
// console.log(result);
// const result = numbers.map(x=>x*x);
// console.log(result);
// const biggerNumber = numbers.filter(x=>x <5);
const biggerNumber = numbers.find(x=> x >5);
console.log(biggerNumber);

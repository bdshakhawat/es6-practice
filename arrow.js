// Before ES6:
//  function doubleIt(num){
//     return num *2;
// }
// const doubleIt = function myFun (num){

//     return num *2;
// }
// Es6:
const doubleIt = num => num *2; 
// const add = (x,y,z) => x + y + z;
// const result = add(2,3,4);
// const add9 = () => 8;

// const result2 = add9();
const mathCal = (x,y) => {
    const sum = x + y;
    const sub = x-y;
    const result = sum * sub;
    return result;
}
const result3 = mathCal(15,6);
console.log(result3);
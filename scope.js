const bonus = 30;
function add(num1,num2){
    const result = (num1 + num2 + bonus);
    console.log(bonus);
    if(result > 9 ){
        const mood = "Happy";
        console.log(mood);
    }
    return result;
    
}
const total = add(5,7);
console.log(total);
console.log(bonus);

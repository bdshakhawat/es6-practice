class Parent{
    constructor(){
        this.fatherName = "Shakhawat Hossain";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
        
        }
        // can write function here without using function key word
        getFullName(){
            return this.name + " "+ this.fatherName;


    }

}
const baby = new Child("Nodrat");
const baby2 = new Child("Nujat");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());
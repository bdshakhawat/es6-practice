class student{
        constructor(sId, sName){
            this.id = sId;
            this.name = sName;
            this.school = "MCPSC";
        }
}
const student1 = new student(1,"Shakhawat");
const student2 = new student(2, "Toba");
const student3 = new student(3,'Mirtazul')
console.log(student1.school,student2.name,student3);
const students = [
{ id: 1, name: "omar" },
{ id: 2, name: "Sunny" },
{ id: 3, name: "Manna" },
{ id: 4, name: "Jah" }];
// const output = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     // console.log(result);
//     output.push(result);

    
// }
// console.log(output);
// const names = students.map(x => x.name);
// console.log(names);
// const ids = students.map(x => x.id);
// console.log(ids);
// const result = students.filter(x => x.id < 4 );
// console.log(result);
const bigger = students.find(s => s.id > 3);
console.log(bigger);

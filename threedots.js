
// const ages = [10,20,30,40,50];
// const ages2 = [12,14,41,42,43];
// const ages3 = [22,24,43,44,45];
// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// const allAges2 = [...ages,...ages2,5,...ages3];
// console.log(allAges2);
const business = 550;
const minister = 450;
const sochib  = 350;
// const maximum = Math.max(business,minister,sochib);
const takaPoisa = [550,450,350];
const maximum = Math.max(...takaPoisa);

console.log(maximum);
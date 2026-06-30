//1.string daata type
let name="kamal"
console.log(typeof(name))
//2.number datatype
let age=78;
let rate=10.5;
let i=1/0;
console.log(age)
console.log(typeof(rate))
console.log(i)

//3.boolean datatype
let isEligible = 10>15;
console.log(isEligible)

//4.null datatype
let gender=null;

console.log(gender)
//5.undifind

let fristname;
console.log(fristname)

const operator = "@#$&";

let index = Math.floor(Math.random() * operator.length);

let symbol = operator[index];

if (symbol === "$") {
    console.log(symbol + " gauss number!");
}
else {
    console.log(symbol);
}
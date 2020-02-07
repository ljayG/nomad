console.log('Im Working. Im js.');

let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

const what = "ljayG";
console.log(what);

// Float
const wat = 36.1;

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(daysOfWeek[2]);

const perInfo = {
    name: "Jongwon",
    age: 41,
    gender: "Male",
    isHandsome: true,
    city: "seoul",
    favMovies: ["터미네이터", "오만과 편견", "천공의 섬 라퓨타"],
    favFood: [
        {
            name: "삼겹살",
            fatty: false
        },
        {
            name: "Cheese Burger",
            fatty: true
        }
    ]
}

console.log(perInfo.gender);

perInfo.gender= "Female";

console.log(perInfo.gender);

console.log(perInfo);


function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetLj = sayHello("Jongwon", 14);

//console.log(greetLj);
const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    division: function(a, b){
        return a / b;
    },
    multi: function(a, b){
        return a * b;
    },
    square: function(a, b){
        return a ** b;
    }
}

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const division = calculator.division(5, 5);
const multi = calculator.multi(5, 5);
const square = calculator.square(5, 5);

console.log(`plus: ${plus}, minus: ${minus}, division: ${division}, multi: ${multi}, square: ${square}`);
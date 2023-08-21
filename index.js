// // ключове слово імя змінної = значення
// // let, const , var - ключові слова.
// const varName = "var name";
// const varname = "sd";

// const currentYear = 2023;
// // console.log("Рік:", currentYear);

// const num = 10; //- тип даних number
// const str = "string"; // - тип даних string
// const bool = true; // - тип даних Boolean
// const selectedProduct = null; // - тип даних Null
// let username;
// // console.log(username); // - тип даних undefined

// // console.log("тип даних:", typeof selectedProduct);

// // console.log()
// // alert()

// // alert("Ми викликали алерт!");

// // const isYear = confirm("Зараз 2020 рік ?");
// // console.log(isYear);

// // const isYear = prompt("Зараз 2020 рік ?");
// // console.log(typeof isYear, isYear);

// const x = "10.23px";
// const y = 10;

// // console.log(x !== y);

// // Додавання +
// // Віднімання -
// // Множення *
// // Ділення /
// // Остача від ділення %
// // a>b i a<b - більше або меньше
// // a>=b i a<=b - більше або дорівнює та  меньше або дорівнює
// // a == b - рівність
// // a === b - строга рівність
// // a != b -  нерівність
// // a !== b - строга нерівність

// let value = 9;
// value += 10; //Аналогічно запису value = value + 10
// // console.log(value);

// // NUMBER --------->
// // Number.parseInt(x) - Парсить з рядка ціле число. 10
// // Number.parseInt(x) - Парсить з рядка дробове число. 10.23
// // console.log(Number.isNaN(y));

// // const invalidNuber = Number("wewewe");
// // console.log(Number.isNaN(invalidNuber));

// // console.log(Math.floor(2.7)); //-2
// // console.log(Math.ceil(1.2)); //-2
// // console.log(Math.round(1.5)); повертає значення яке заокруглене до найближчого цілого .. 2
// // console.log(Math.max(21, 22, 23, 24)); повертає найбільше число
// // console.log(Math.min(11, 22, 33)); повертає найменьше число
// // console.log(Math.pow(2, 4)); піднесення до степеня
// // console.log(Math.random()); повертає рандомне число від 0 до 1
// // console.log(Math.round(Math.random() * (10 - 1) + 1));

// // STRING --------->
// const strr = "JavaScript";

// const message = "Banana " + "is" + " happy";
// // console.log(1 + +"20");
// // ${вираз}

// const fruit = "Banana";
// const color = "yellow";
// const file = "index.js";

// const banana = ${fruit} is ${color};
// // console.log(fruit.toLowerCase());
// // console.log(file.endsWith(".js"));

// // fruit.length - повертає нам кількість символі в рядкові //6
// // fruit.toUpperCase() - переводить рядок у верхній регістр
// // fruit.toLowerCase() - переводить рядок у нижній регістр
// // banana.indexOf("is") - повертає позицію (індекс) якщо не знаходить тоді -1
// // banana.includes("is") - перевіряє чи міститься в рядку підрядок
// //

// // ЛОГІЧНІ ОПЕРАТОРИ && || !

// // вираз && вираз
// const age = 20;
// // console.log(age > 10 && age < 30); // true && true -> true
// // console.log(age > 20 && age < 30); // false

// // вираз || вираз
// // console.log(age < 40  age > 30); // true  false -> true

// // !вираз
// // const isOnline = true;
// // const isOffline = !isOnline;
// // console.log(!true); //-> false
// // console.log(isOffline); //-> false

// // Розгалуження 

// // if (умова)
// //    //тіло
// // }

// const isAge = 22;

// // if (isAge === 10) {
// //     console.log("age==10");
// //    } else {
// //     console.log(`age = $(isAge}`);
// //    } 

// if (isAge === 25) {
//     сonsole.log("age==10");
// } else if (isAge === 22) {
//     console.log(`age=${isAge}`)
// } else if (isAge === 23);
//     console.log(`age=${isAge}`)

// умова ? <вираз якщо умова правдива> : <вираз якщо умова хибна>
// isAge === 10 ? console.log("age = 10") : console.log(`age = ${isAge}`);

// switch (значення) {
//     case значення:
//         інструкції;
//         break;
//     case значення:
//         інструкції;
//         break;

//     default:
//         break;
// }

// const value = 5

// if (true){
//     console.log("Блочна область видимості", value);
//     let blockVar = 10;
//     console.log("Блочна область видимості", blockVar);
//     const innerVar = () => {
//         const localVar = 222;
//         console.log(localVar);
//         console.log(value);
//     }
//     console.log(localVar);
// }
// // console.log("Блочна область видимості", blockVar);

// console.log("Блочна область видимості", value);

// Цикли!
//  while(умова){
    // код, тіло циклу
// }

// do {
//     counter +=-1;
//     console.log("counter: ", counter);
// } while (counter < 1);

// for (ініціалізація; умова; крок) {
//     тіло циклу
// }

// i, j, k 

// for(let i = 0; i <= 20; i += 5) {
//     console.log(i);
//     if (i === 10) {
//         console.log("Знайшли число 10, перериваємо виконання циклу!")
//         break;
//     }
// }

// let i = 0;

// for (let i = 0; i <= 100; i+= 3) {
//     console.log(i);
// }

// for (let i = 0; i <= 50; i += 1) {
//     console.log(i);
// }

// МАСИВИ

// const arr = ["Тарас", "Антон", "Максим", "Тарас", "Антон", "Максим", "Тарас", "Антон", "Максим",];
// console.log(arr);
// // console.log(arr.length);
// arr[1] = "Olga";
// const lastIndex = arr.length - 1;
// console.log(lastIndex);
// // console.log(arr);

// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const i of arr) {
//     console.log(i)
// }

// 

// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a = 10;

// console.log(a);
// console.log(b);

// const message = ["Javascript", "це", "цікаво"]

// console.log(message.includes("це"));

// const numbers = [];
// console.log(numbers);
// numbers.push(1);
// console.log(numbers);
// numbers.push("push");
// console.log(numbers);
// numbers.push(3,4);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// const clients = ["Тарас", "Антон", "Максим", "Olga", "Polina", "Poly"]

// const newClients = clients.silce(1, 4);
// console.log(clients);
// console.log(newClients);

// Повертає новий масив, що має копію попереднього масива, не змінюючи його.

// const scores = [1, 2, 3, 4, 5];
// const deletedScores = scores.splice(0, 3);
// console.log(scores);
// console.log(deletedScores);

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, "yellow", "sdsdsd");
// console.log(colors);

// // concat

// const oldArr = [1, 2, 3];
// const newArr = [4, 5, 6];

// const arr = oldArr.concat(newArr);
// console.log(arr);

// function sayHello() {
//     console.log("Hello, world!")
// }
// sayHello();

// // function calc(x, y, i) {
// //     console.log(`Результат множення x y i = ${x * y * i}`)
// // }
// // calc(2, 3, 4);

// const calc = function (x, y, i) {
//     console.log(`Результат множення x y i = ${x * y * i}`)
// };
// calc(2, 3, 4)

// function newCalc (x, y, i) {
//     console.log("Код до ретьорн проводиться звичайним чином");
//     return x * y * i;
//     console.log("Цей лог ніколи не виконається");
// }

// const book = {
//     title:'Obvivion',
//     author:'Bernard D;',
//     isPublic:true,
//     pages:5000,
//     stats: {
//         rating: 9.9,
//         popular: 2.2,
//     }
// }

// console.log(book.title)
// console.log(book.stats)

// function age(x) {
//     if (x => 18) {
//      console.log("Ви неповнолітні");
// } else {
//     console.log("Ви повнолітні");
//     }
// }
// age(10);
// function foo(name) {
//     console.log(`Ласкаво Просимо ${name}`)
// }

// foo("Іван");

// function highFoo(name, callback) {
//     console.log(`Реєструємо Гостя ${name}`)
//     callback(name);
// }

// highFoo("Georgiy", foo);

// highFoo("Bernard", function notify(name) {
//     console.log(`Шановний ${name}, ваш номер буде готовий за 30 хв!`)
// })

// cars.forEach((element) => {
//     // тіло функції
// })

// cars.forEach(function callback(element, index) {
//     // тіло функції
// })

// const number = [2, 3, 4, 5, 6, 7];

// for (let i = 0; i < number.length; i++) {
//     console.log(`Індекс ${i}, значення ${number[i]}`)
// }

// number.forEach(function (number, index) {
//     console.log(`forEach Індекс ${index}, значення ${number}`)
// })

// const names = ["Oleksandr", "Ivan", "Georgiy"];

// names.forEach (function (names) {
//     console.log(`Привіт, мене звати ${names}`)
// });

// function classic () {
//     return a * b * c;
// }

// const arrow = (a + b + c) => {
//     return a * b * c;
// }

// const add = (a) => {
//     return a + 5;
// }

// const logMessage = (item, index) => {
//     console.log(`forEach Індекс ${index}, значення ${item}`)
// }

// number.forEach(logMessage);

Array.map((item) => {});

const planets = ["Земля", "Марс", "Меркурій", "Венера"];
const planetsUpp = planets.map((item) => item.toUpperCase());
console.log(planetsUpp);
console.log(planets);

item =>
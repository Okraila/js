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

// Array.map((item) => {});

// const planets = ["Земля", "Марс", "Меркурій", "Венера"];
// const planetsUpp = planets.map((item) => item.toUpperCase());
// console.log(planetsUpp);
// console.log(planets);

// const myAgeLastNumber = 3;

// const myLetterNumber = 9;

// function myNumbersAdded (myAgeLastNumber, myLetterNumber) {
//     console.log(myAgeLastNumber + myLetterNumber);
// }

// myNumbersAdded(3, 9);

// const number1 = 51;
// const number2 = 49;

// function plus (number1, number2) {
//     console.log(number1 + number2)
// }

// function minus (number1, number2) {
//     console.log(number1 - number2)
// }

// function multiplication (number1, number2) {
//     console.log(number1 * number2)
// }

// function division (number1, number2) {
//     console.log(number1 / number2)
// }

// plus(number1, number2);

// minus(number1, number2);

// multiplication(number1, number2);

// division(number1, number2);

// const students = [
//     { name: "Taras", age: 14, height: 1.5 },
//     { name: "Jack", age: 13, height: 1.32 },
//     { name: "Olga", age: 12, height: 1.42 },
//     { name: "Ivan", age: 11, height: 1.21 },
//   ];

// students.forEach (function calc({name, age, height}){
//     console.log(`Мене звати ${name} мені ${age} років, маю висоту` ${height} * 100 `см`)
// })

// let age = 10.235;

// console.log(age);

// const treeStatus = "green";

// if (treeStatus == "green") {
//     console.log("Надворі літо!");
// } else {
//         console.log("Надворі зима!");
// }

// function numberList(x, y) {
//     for (let i = x; i <= y; i++) {
//         console.log(i);
//     }
// }

// numberList(1, 20);

// const numbers = [1, 2, 3, 4, 8, 12, 16, 100];

// let sum = 0;

// numbers.forEach ((item)=>{
//     sum += item;
// })

// console.log(sum);

// const numbers = [21, 13, 14, 8, 1, 6, 2, 18, 16, 13];

// const otherNumbers = [15, 15, 15, 15, 25, 15, 15, 15, 15, 15];

// let sum = addNumbers(numbers);

// let sum2 = addNumbers(otherNumbers);

// console.log(sum, sum2);

// const numbers = [];

// for (let i = 0; i < 10; i++) {
//     const random = Math.floor(Math.random() * 10);
//     console.log(random);
//     numbers.push(random);
// }

// console.log (numbers);

// const scores = [23, 23, 4, 343, 5, 5453, 2424];
// scores.sort();
// console.log(scores);

// const sortedScores = [...scores].sort((a,b => a - b));
// console.log(sortedScores);

// const students = [
//     {name:"Ivan", score:55},
//     {name:"Vlad", score:64},
//     {name:"Olga", score:33},
//     {name:"Pavlo", score:99},
// ]
// const studentsSorted = [...students].sort((a,b => a.score - b.score));
// console.log(studentsSorted);

// console.log(document);

// document.querySelector(selector)
// const title = document.querySelector("h1");
// console.log(title);
// console.log(document.querySelectorAll("li"));

// const li = document.querySelectorAll("li");
// li.forEach((i) => (i.textContent = "this is li"));

// // elem.textContent повертає текстовий контент в середині елемента.
// // Доступний для читання і запису.
// console.log(title.textContent); //читання з елемента

// // Властивість classList

// console.log(title.classList.contains("title")); //перевіряє наявність класу
// title.classList.add("add-class"); //додаємо клас
// title.classList.remove("add-class"); // забераємо клас
// title.classList.toggle("add-class"); // перемикаємо клас

// const button = document.querySelector(".btn");
// console.log(button);
// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";

// //Attributes на самоопрацювання!
// console.log(title.attributes);

// // document.createElement('h1') - синтаксис створення елемента
// const heading = document.createElement("h2");
// console.log(heading);
// heading.textContent = "This is heading sdsdvsd sdfsdfsd sdfsdf";
// console.log(heading);

// const body = document.querySelector("body");
// body.append(heading);

// heading.remove(); // видаляє елемент з дома

// // Властивість innerHTML доступна для читання і запису.

// const p = document.querySelector(".text");
// p.innerHTML =
//   'Ми написали якийсь текст <span class="text__span"> наш спан </span>';

// console.log(title.innerHTML);

// створити div та добавити йому клас box, зробити його шириною і висотою 500х500
// помістити в середину  заголовок 1 рівня з текстом  "це наш заголовок"
// заголовок покрасити в синій колір а дів в жовтий

// event - ім'я події, наприклад "click"
// handler - колбек-функція, яка підчас події
// options - необов`язковий об`єкт параметрів

// const btn = document.querySelector(".btn");
// console.log(btn);

// // const handleClick = () => {
// //     console.log("Відбувся клік по кнопці!")
// // };
// // btn.addEventListener("click", handleClick);

// const handleClick = (e) => {
//     console.log(e);
//     btn.classList.toggle("active");
// };
// btn.addEventListener("click", handleClick);

// const div = document.querySelector(".object");
// const button = document.querySelector(".button")
// const button2 = document.querySelector(".button2")
// const button3 = document.querySelector(".button3")
// const button4 = document.querySelector(".button4")

// const handleClick = (item, color) =>{
//     item.AddEventListener('click', () => {
//         div.style.backgroundColor = color
//     })
// }

// handleClick(button, 'red');
// handleClick(button2, 'black');
// handleClick(button3, 'white');
// handleClick(button4, 'blue');

// const menu__list = document.querySelector(".menu__list")

// const handleClick = (item) =>{
//   console.log(item);
//   btn.classList.toggle("menu__list__active");
// };
// btn.addEventListener("click", handleClick);

// handleClick(menu__list);
// 1.1
let q = 3;
let w = 10;
console.log(q * w);

// 1.2
let e = 40;
let r = 5;
console.log(e / r);

// 1.3
let t = 13;
let y = 8;
console.log(t + y);

// 1.4
let a = 11;
let b = true;
let c = 'java script';
let d = '100';
console.log(a, b, c, d);

// 1.5
let num = 1;
console.log(num += 11);
console.log(num -= 11);
console.log(num *= 11);
console.log(num /= 11);
console.log(num++);
console.log(num--);

// -----------------------------------------------

// 2.1
let userInput = +prompt("Введіть число:");
let sqrtNumber = userInput ** 2;
console.log(`Результат: ${sqrtNumber}`);

// 2.2
let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");
let average = (num1 + num2) / 2;
console.log(`Середнє арифметичне: ${average}`);

// 2.3
let minutes = +prompt("Введіть кількість хвилин:");
let seconds = minutes * 60;
console.log(`${minutes} хвилин - це ${seconds} секунд`);

// 2.4
let greeting = 'Hello,';
let userName = prompt("Введіть ваше ім'я:");
console.log(`${greeting}, ${userName}!`);
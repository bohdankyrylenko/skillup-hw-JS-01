//NUMBER
//task1
let pi = Math.PI;
let pi2 = pi.toFixed(2);
console.log(pi2);
//task2
const arr = [15, 11, 16, 12, 51, 12, 13, 51];

console.log(Math.max(...arr));
console.log(Math.min(...arr));
//task3
console.log(Math.random().toFixed(2));

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}
console.log(randomInteger(0, 100));
//task4
let a = Number(0.6 + 0.7);
console.log(a.toFixed(1));
//task5 
let b = parseInt('100$'.replace(/\D+/g, ""));
console.log(b);

//STRING
//task1
let str = 'some test string';
console.log(str[0]);
console.log(str[str.length - 1]);
//task2
Str = str[0].toUpperCase() + str.slice(1);
console.log(Str);
stR = str.slice(str[str.length - 1]) + str[str.length - 1].toUpperCase();
console.log(stR);
//task3
console.log(str.indexOf("string"));
//task4
console.log(str.indexOf(' ', str.indexOf(' ') + 1));
//task5
console.log(str.substr(5, 4));
//task6
console.log(str.substr(5, 4));
//task7
console.log(str.slice(0, -6));
//task8
let a1 = "20";
let b2 = "16";
console.log(a1 + b2);

//OBJECT 
//task1 
let obj = {};
obj.product = "iphone";
//task2
obj.price = "1000";
obj.currency = "dollar";
//task3
obj.details = {};
obj.details.model = "11";
obj.details.color = "red";
console.log(obj);

//IF ELSE
//task1
let hid = "hidden";
if (hid === "hidden") {
    hid = "visible"
} else {
    //
}
console.log(hid);
//task2
let one = 1;
if (one === 0) {
    one = 1
} else if (one < 0) {
    one = 'less then zero'
} else if (one > 0) {
    one = one * 10
}
console.log(one);
//task3
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
}
if (car.age > 5) {
    console.log('Need Repair')
    car.needRepair = true
} else {
    car.needRepair = false
}
console.log(car)
//task4 
let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
}

let price1 = parseInt(item.price.replace(/\D+/g, ""))
let discount1 = parseInt(item.discount.replace(/\D+/g, ""))
let sale = (price1 * discount1) / 100

if (item.discount && item.price) {
    item.priceWithDiscount = price1 - sale
    console.log(item.priceWithDiscount)
}
//task5
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;

let priceproduct = parseInt(product.price.replace(/\D+/g, ""));

if (priceproduct => min && priceproduct <= max) {
    console.log(product.name)
} else {
    console.log("Товар не найден")
}
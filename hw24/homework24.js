"use strict"
//для проверки задач открывать только блочные комментарии */


//Task1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

/*
function getRes(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

console.log(getRes(1, 2));
console.log(getRes(2, 1));
console.log(getRes(1, 1));
*/

//Task2. Написать функцию, которая вычисляет факториал переданного ей числа.
//Используем вызов функции в самой себе и function definition  expression

/*
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

*/

//Task3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

/*
let getConcat = (a, b, c) => +[
    String(a),
    String(b),
    String(c),
].join('');

console.log(getConcat(5, 6, 7));

*/

//Task4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
//Используем оператор Rest 

/*
function getSq(...params) {
    return params.length === 1 ? params[0] ** 2 : params[0] * params[1];
}

console.log(`Площадь квадрата равна  ${getSq(3)}`);
console.log(`Площадь прямоугольника равна  ${getSq(3, 4)}`);
console.log(`Площадь квадрата равна, даже если ввести лишние аргументы  ${getSq(3, 4, 5)}`);
*/

//Task5 Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


/*
function ChekNum(n) {
    let k = 1, i;
    for (i = 2; (i < n); i++) {
        if (n % i === 0) {
            k += i;
        }
    }
    return (n === k) && (n != 1) ? "число совершенное" : "число не совершенное";
}
console.log(ChekNum(2));
console.log(ChekNum(6));
console.log(ChekNum(28));
*/


//Task6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными.Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
/*
function ChekNum(n) {
    let k = 1, i;
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            k += i;
        }
    }
    return (n === k) && (n != 1);
}


let startNum = +prompt("1. Please, enter the start integer number of the range");

let endNum = +prompt("2. Please, enter the end integer number of the range");

let listOfPerfect = [];

function getListOfPerfect(startNum, endNum) {

    for (let i = startNum; i <= endNum; i++) {
        ChekNum(i) && listOfPerfect.push(i);
    }
    return listOfPerfect.join(',')

}

let res = getListOfPerfect(startNum, endNum);
let mess = res ? `Список совершеных чисел в заданном диапазоне:  ${res}` : 'В заданном диапозоне совершенных чисел нет';
console.log(mess);
*/

//Task 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
/*
function ifEmpty(params) {
    return params ? params : "00";
}

let getTime = function () {
    let houre = prompt("1. Введите количество часов в формате чч, 24 часа, например 04 или 12");

    let min = prompt("2. Введите количество минут в формате мм, например 07 или 22");

    let sec = prompt("3. Введите количество секунд в формате сс, например 07 или 22");

    min = ifEmpty(min);
    sec = ifEmpty(sec);

    console.log(houre + ":" + min + ":" + sec);
}

getTime();

*/

//Task 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

/*
function ifEmpty(params) {
    return params ? params : 0;
}

let getTime = function () {
    let houre = +prompt("1. Введите количество часов в формате  24 часа");

    let min = +prompt("2. Введите количество минут");

    let sec = +prompt("3. Введите количество секунд ");

    min = ifEmpty(min);
    sec = ifEmpty(sec);
    let timeInSec;

    return timeInSec = houre * 3600 + min * 60 + sec;
}

console.log(`Время в секундах:  ${getTime()}`);

*/

//Task 9.Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
/*
function ifEmpty(params) {
    return params ? params : 0;
}

function ifShot(params) {
    return params <= 9 ? "0" + params : String(params);
}

let getTime = function () {

    let sec = +prompt("1. Введите любое количество секунд ");
    sec = ifEmpty(sec);

    let h = Math.trunc(sec / 3600);
    let m = Math.trunc((sec % 3600) / 60);
    sec = (sec % 3600) % 60;

    h = ifShot(h);
    m = ifShot(m);
    sec = ifShot(sec);

    console.log("Время в формате:" + h + ":" + m + ":" + sec);
}


getTime();

*/

//Task 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function ifEmpty(params) {
    return params ? params : 0;
}

let getTimeSec = function (houre, min, sec) {

    min = ifEmpty(min);
    sec = ifEmpty(sec);
    let timeInSec;

    return timeInSec = houre * 3600 + min * 60 + sec;
}

function ifShot(params) {
    return params <= 9 ? "0" + params : String(params);
}

let getTime = function (sec) {

    sec = ifEmpty(sec);

    let h = Math.trunc(sec / 3600);
    let m = Math.trunc((sec % 3600) / 60);
    sec = (sec % 3600) % 60;

    h = ifShot(h);
    m = ifShot(m);
    sec = ifShot(sec);

    return `${h}:${m}:${sec}`;
}




function getDifDate() {

    let h1 = +prompt("1. Введите количество часов в формате  24 часа для первого времени");

    let m1 = +prompt("2. Введите количество минут для первого времени");

    let s1 = +prompt("3. Введите количество секунд для первого времени");

    let h2 = +prompt("1. Введите количество часов в формате  24 часа для второго времени времени");

    let m2 = +prompt("2. Введите количество минут для второго времени");

    let s2 = +prompt("3. Введите количество секунд для второго времени");

    console.log(`Время в секундах для первого значения времени:  ${getTimeSec(h1, m1, s1)}`);
    console.log(`Время в секундах для второго значения времени:  ${getTimeSec(h2, m2, s2)}`);

    let secDef1 = getTimeSec(h1, m1, s1);
    let secDef2 = getTimeSec(h2, m2, s2);
    let secDiff = secDef1 >= secDef2 ? secDef1 - secDef2 : secDef2 - secDef1;

    let mess = secDef1 >= secDef2 ? getTime(secDiff) : "-" + getTime(secDiff);

    console.log(`Разница времени между двумя значениями:  ${mess}`);
}

getDifDate();

"use strict"
//для проверки задач открывать только блочные комментарии

//Task1:Calculate the sum of all numbers in a user-specified range.

/*
let startNum = +prompt("1. Please, enter the start integer number of the range");

let endNum = +prompt("2. Please, enter the end integer number of the range");

let sum = 0;


for (let i = startNum; i <= endNum; i++) {
    sum = sum + i;
}

console.log(`sum of range numbers =  ${sum}`);
*/

//Task2:Query 2 numbers and find only the greatest common factor

/*
function NOD() {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
        var y = arguments[i];
        while (x && y) {
            x > y ? x %= y : y %= x;
        }
        x += y;
    }
    return x;
}

console.log([
    NOD(10, 15),
    NOD(25, 10),
    NOD(48, 36),
].join('\n'));

*/


//Task3: Ask the user for a number and display all the divisors of that number
/*
let num = +prompt("1. Please, enter any integer number");

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}
*/

//Task4:Determine the number of digits in the entered number.
//Solution via loop while

/*let num = +prompt("1. Please, enter any integer number");

let count = 1;
while ((num / 10) > 1) {
    count++;
    num /= 10;
}

console.log(count);
*/

//Task5:Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.При этом также посчитать, сколько четных и нечетных.Вывести статистику на экран.Учтите, что достаточно одной переменной(не 10) для ввода чисел пользователем.
//Prompt the user for 10 numbers and count how many positive, negative and zeros he entered. Also count how many even and odd numbers. Display statistics. Note that one variable (not 10) is enough for the user to enter numbers.

/*

let countPlus = 0, countMinus = 0, countZero = 0, countEven = 0, countOdd = 0;

for (let i = 0; i < 10; i++) {
    let num = +prompt("1. Please, enter any number");

    if (num > 0) {
        countPlus++;
    } else if (num < 0) {
        countMinus++;
    } else countZero++;

    if (num != 0) {
        if (Math.abs(num % 2) === 0) {
            countEven++;
        } else countOdd++;
    }

}


console.log(`positive numbers:  ${countPlus}, negative numbers:  ${countMinus}, zeros: ${countZero}`);
console.log(`even numbers:  ${countEven}, odd numbers:  ${countOdd} `);
*/

//Task6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
// Loop calculator. Ask the user for 2 numbers and a sign, solve the example, print the result and ask if he wants to solve another example. And so on until the user refuses.

/*
do {
    let a = +prompt('Enter the first number');
    let b = +prompt('Enter the second number');
    let i = prompt('Select sign - + / *');

    switch (i) {
        case '+':
            alert(a + b);
            break;
        case '-':
            alert(a - b);
            break;
        case '/':
            alert(a / b);
            break;
        case '*':
            alert(a * b);
        default:
            break;
    }

} while (confirm('Do you want to solve another example?'));


*/

//Task7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
//Ask the user for a number and how many digits to shift it. Shift the digits of the number and print the result (if you shift the number 123456 by 2 digits, you get 345612).

/*
let num = prompt('Enter the  number');
let k = prompt('how many digits do shift it?');

let count = 1, j = num;
while ((j / 10) > 1) {
    count++;
    j /= 10;
}

let mes = (k >= count) ? `Number shift is greater than or equal to number length` : num.slice(k) + num.slice(0, k);


console.log(mes);

*/

//Task8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
//Loop the output of the days of the week like this: “Day of the week. Want to see the next day? " and so on until the user clicks OK.
// В задании наверное ошибка?? Пока пользователь не нажмет отмену???

/*
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    //currDay = (currDay + 1) % days.length;
    currDay = (currDay < days.length - 1) ? (currDay + 1) : 0;
}

*/

//Task9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
//Print the multiplication table for all numbers from 2 to 9. Each number must be multiplied by numbers from 1 to 10.

/*
let i, j;

for (i = 2; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        console.log(`${i}x${j}=${i * j}`);
    }
}

*/

//Task. 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
//Guess the number game. Ask the user to guess a number from 0 to 100 and guess it in the following way: each iteration of the loop, divide the range of numbers in half, write the result in N and ask the user "Is your number> N, <N or == N?" Depending on what the user specified, decrease the range. The initial range was from 0 to 100, divided in half and got 50. If the user indicated that his number is> 50, then the range was changed from 51 to 100. And so on until the user chooses == N.

let num = +prompt('guess any integer number from 0 to 100 and enter it');

let left = 0;
let right = 100;
let sign;
let current;

do {
    current = Math.trunc(((left + right) / 2));

    sign = prompt(`Если Ваше число больше ${current} то введите >, если меньше ${current}, то введите <, если ваше число равно ${current} то введите ваше число для подтверждения / If your number is greater than the current one, then enter >, if less, then enter <, if your number is equal to the current one, then enter your number to confirm`);
    if (sign == ">") {
        left = current + 1;
    }

    if (sign == "<") {
        right = current - 1;
    }

} while (num != +sign);

alert(`Ваше число ${current}`);



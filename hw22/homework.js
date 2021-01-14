//Task1: Ask age and and determine who he is: a child (0–2), a teenager (12–18), an adult (18_60) or a pensioner (60– ...).

/*
let age = prompt("What is you age?");
let massage;


if (age <= 2) {
    message = "You are a child";
} else if ((age >= 12) && (age < 18)) {
    message = "You are a teenager";
} else if ((age >= 18) && (age < 60)) {
    message = "You are an adult";
} else if (age >= 60) {
    message = "You are a pensioner";
} else {
    message = "You age wasn`t mentioned in spec. May be you a child or preteen";
}

console.log(message);
*/


//Task2: Ask the user for a number from 0 to 9 and display a special character located on this key (1– !, 2– @, 3– #, etc.).

/*
let num = prompt("Type any digit from 0 to 9?");
let symb;

switch (+num) {
    case 1:
        console.log("!");
        break;
    case 2:
        console.log("@");
        break;
    case 3:
        console.log("#");
        break;
    case 4:
        console.log("$");
        break;
    case 5:
        console.log("%");
        break;
    case 6:
        console.log("^");
        break;
    case 7:
        console.log("*");
        break;
    case 8:
        console.log("*");
        break;
    case 9:
        console.log("(");
    case 0:
        console.log(")");
        break;
    default:
        alert("It`s not a single digit 0-9!!!");
        break;
}

*/
// Task3: Ask the user for a three-digit number and check if it contains the same numbers.

/*
let num = +prompt('Enter a three-digit number: ');
let num1 = parseInt(num / 100);
let num2 = parseInt(num / 10) % 10;
let num3 = num % 10;
if (num1 === num2 || num2 === num3 || num1 === num3)
    alert('Match numbers found');
else
    alert('No matches found');

*/

// Task4: Ask the user for the year and check if it is a leap year or not. A leap year is either a multiple of 400 or a multiple of 4 and is not a multiple of 100.
/*
let year = +prompt('Enter any year: ');

let result = (((year % 4) === 0 || ((year % 400) === 0)) && (year % 100) != 0) ?
    alert('The year is leap') :
    alert('The year is not leap');

*/

//Task5: Prompt the user for a five-digit number and determine if it is a palindrome.

/*
let num = +prompt('Enter a 5-digit number: ');
let num1 = parseInt(num / 10000);
let num2 = parseInt(num / 1000) % 10;
let num3 = parseInt(num / 100) % 10;
let num4 = parseInt(num / 10) % 10;
let num5 = num % 10;
let revNum = num5 * 10000 + num4 * 1000 + num3 * 100 + num2 * 10 + num1;
if (num === revNum)
    alert('Number is a palindrome');
else
    alert('Number is a not a palindrome');
*/

//Task6: Write a currency converter. The user enters the amount of USD, chooses which currency he wants to transfer EUR, UAN or AZN, and receives the corresponding amount in response.

/*let amount = +prompt('Enter the amount of USD you have: ');
let cur = prompt('Enter in upper case the which currency you want to transfer EUR, UAH or AZN: ');

var rates = {
    eur: 0.88,
    uah: 27.96,
    azn: 1.7
}

let result;

if (cur === "EUR") {
    result = amount * rates.eur;
} else if (cur === "UAH") {
    result = amount * rates.uah;
} else if (cur === "AZN") {
    result = amount * rates.azn;
} else {
    alert("You have entered incorrect currency");
    result = undefined;
    cur = "currancy"
}

alert(`You will get ${result} ${cur}`);

*/

//Task7: Ask the user for the purchase amount and withdraw the amount to be paid with a discount: from 200 to 300 - the discount will be 3%, from 300 to 500 - 5%, from 500 and above - 7%.

/*
let sum = prompt("Enter your purchase amount?");
let disc = 0;
let message;


if ((sum >= 200) && (sum < 300)) {
    disc = 3;
} else if ((sum >= 300) && (sum < 500)) {
    disc = 5;
} else if (sum >= 500) {
    disc = 7;
} else {
    message = "You don't have a discount";
}

message = `the amount to be paid is: ${sum - (sum * disc / 100)}`;


console.log(message);
*/

//Task8:Ask the user for the circumference and perimeter of the square. Determine if such a circle can fit into the specified square.

/*
let cicleLen = prompt("1. Please, enter the  circumference");
let perimSq = prompt("2. Please, enter the  perimeter of the square");

let a = perimSq / 4;
let diag = a * Math.sqrt(2);

let r = cicleLen / (2 * 3.14);

if (r < (a / 2)) {
    console.log("The circle fits in the square");
} else console.log("The circle doesnt fit in the square");

if (diag <= r) {
    console.log("The square fits in the circle");
}
*/

//Task9:Ask the user 3 questions, each question has 3 answer options. For each correct answer 2 points are awarded. After the questions, display the number of points to the user.

/*
sumOfPoint = 0;
let qest1 = prompt("1. Please, choise and enter a correct anser: What the dog say? 1)gav 2) meow 3)kak proyti v biblioteky");

if (qest1 === "gav") {
    sumOfPoint += 2;
    alert(`Congratulate!!! The anser is correct. You have earned 2 points. You total number of points is ${sumOfPoint}`);
} else {
    alert(`The anser is incorrect. You have not earned any points. You total number of points is ${sumOfPoint}`);
}

let qest2 = prompt("2. Please, choise and enter a correct anser: What the fox say? 1)gav 2) meow 3)Hatee-hatee-ho");

if (qest2 === "Hatee-hatee-ho") {
    sumOfPoint += 2;
    alert(`Congratulate!!! The anser is correct. You have earned 2 points. You total number of points is ${sumOfPoint}`);
} else {
    alert(`The anser is incorrect. You have not earned any points. You total number of points is ${sumOfPoint}`);
}

let qest3 = prompt("3. Please, choise and enter a correct anser: What the first chiken or egg? 1)egg 2) chiken 3)singularity");

if (qest3 === "egg") {
    sumOfPoint += 2;
    alert(`Congratulate!!! The anser is correct. You have earned 2 points. You total number of points is ${sumOfPoint}`);
} else {
    alert(`The anser is incorrect. You have not earned any points. You total number of points is ${sumOfPoint}`);
}

if (sumOfPoint === 6) {
    alert(`You are a hero!!!  You total number of points is ${sumOfPoint}`);
}

if (sumOfPoint === 4) {
    alert(`You can better!!!  You total number of points is ${sumOfPoint}`);
}

if (sumOfPoint === 2) {
    alert(`You need to try!!!  You total number of points is ${sumOfPoint}`);
}

if (sumOfPoint === 0) {
    alert(`Study, study  and study again!!! You total number of points is ${sumOfPoint}`);
}

*/


//Task10:Request a date (day, month, year) and display the date following it. Consider the possibility of moving to the next month, year, and leap year.

let yearDate = +prompt("1. Please, enter any year in this format ('yyyy')?");

let monthDate = +prompt("2. Please, enter the number of month from 1 to 12, in this format ('m')?");

let dayDate = +prompt("3. Please, enter the number of day, in this format ('d')?");
let nextDayDate, nextMonth, nextYear;

let longMonth = [1, 3, 5, 7, 8, 10];

function typeM(month) {
    return month === monthDate;
};

let typeOfMonth = longMonth.some(typeM);
console.log("If Month long :" + typeOfMonth);

let leapYear = ((yearDate % 4) === 0) ? true : false;

console.log(`If year leap :${leapYear}`);

if ((monthDate > 12) || (monthDate > 31)) {
    console.error('Date format error');
}

nextMonth = monthDate;
nextYear = yearDate;
nextDayDate = dayDate + 1;

if ((monthDate === 2) && (dayDate === 28) && !leapYear) {
    nextDayDate = 1;
    nextMonth = monthDate + 1;
} else if ((monthDate === 2) && (dayDate === 29) && leapYear) {
    nextDayDate = 1;
    nextMonth = monthDate + 1;
} else if ((monthDate === 12) && (dayDate === 31)) {
    nextMonth = 1;
    nextDayDate = 1;
    nextYear = yearDate + 1;
} else if (((dayDate === 31) && typeOfMonth) || ((dayDate === 30) && !typeOfMonth)) {
    nextDayDate = 1;
    nextMonth = monthDate + 1;

} else {

    nextDayDate = dayDate + 1;
    nextMonth = monthDate;
}

let nextDate = `Tommorow will be ${nextDayDate} day of ${nextMonth} month of ${nextYear} year!!!`;

console.log(nextDate);


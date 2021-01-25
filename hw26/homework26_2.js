//2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества 
//и цены за единицу товара. Написать следующие функции:

//Распечатка чека на экран;
//Подсчет общей суммы покупки;
//Получение самой дорогой покупки в чеке;
//Подсчет средней стоимости одного товара в чеке.

let list = [{
    item: "bread",
    quont: 4,
    price: 20
},
{
    item: "apple",
    quont: 2,
    price: 40
},
{
    item: "milk",
    quont: 3,
    price: 100
}
]
//Task2.1 Распечатка чека на экран;


function checkout (arr) {
    arr.forEach ((item, index) => {
        console.log(`${index+1}. ${item.item}: ${item.quont} шт х ${item.price} = ${item.quont*item.price} грн`);
    })
} 

checkout(list);


//Task2.2 Подсчет общей суммы покупки;

function sum (arr) {
    let sum = 0;
    arr.forEach ((item, index) => {
        sum+=  item.quont*item.price;       
    })
    console.log(`Всего: ${sum} грн`);
} 

sum(list);


//Task2.3 Получение самой дорогой покупки в чеке;

function maxPrice (arr) {
    let max = arr[0].price;
    arr.forEach ((item) => {
        max =  (max < item.price)? item.price:max;               
    })

    console.log(`Макс ціна: ${max} грн`);
} 

maxPrice(list);

//Task2.4 Подсчет средней стоимости одного товара в чеке.
function averPrice (arr) {
    let sum = 0;
    arr.forEach ((item, index) => {
        sum+=  item.price;               
    })

    console.log(`Сер ціна: ${(sum/arr.length)} грн`);
} 

averPrice(list);



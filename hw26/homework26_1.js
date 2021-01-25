"use strict"
/*1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/



let list = [{
    item: "bread",
    quont: 4,
    ifb: true
},
{
    item: "apple",
    quont: 2,
    ifb: false
},
{
    item: "milk",
    quont: 3,
    ifb: false
}
]

// Task1.1.Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
/*
let cloneList = list.slice();

function firstb() {
    let newArr = cloneList.sort((a, b) => {
        return a.ifb - b.ifb
    })
    return newArr;
}

console.log(firstb());

*/

// Task1.2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

/*
function addItem(product, list) {

    // проверка, есть ли в списке вообще такой продукт
    let res = list.every(elem => elem.item != product);
    let newProduct = {
        item: product,
        quont: 1,
        ifb: false
    };
    //если нет, то добавляем его в список
    if (res) {
        list.push(newProduct);
    } else {
        for (let i = 0; i < list.length; i++) {
            // иначе он есть, проходимся цклом по массиву и у которого значение свойства item равно
            //product , то увеличиваем количество на 1
            if (product === list[i].item) {
                list[i].quont++;
            }
        }
    }

    console.log(list);
}

//Откройте один из вариантов вывода функции или все сразу
addItem('milk', list);
//addItem('orange', list);
//addItem('orange', list);
//addItem('banana', list);
//addItem('bread', list);
//addItem('bread', list);

*/

// Task1.3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

function changeStatus(product, list) {
    for (let i = 0; i < list.length; i++) {

        if (product === list[i].item) {
            list[i].ifb = true;
        }
    }
    console.log(list);
}

changeStatus('apple', list)







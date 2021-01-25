// Task3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью 
// document.write() в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let arr = [{
    styleName: 'color',
    styleValue: 'red'
},
{
    styleName: 'font-size',
    styleValue: '15px'
},
{
    styleName: 'background',
    styleValue: '#f5f5f5'
}
];


function buildNode (styles, text = 'default') {

let stylesList = '';

for (let i = 0; i < styles.length; i++) {
    stylesList = stylesList + styles[i].styleName + ':' + styles[i].styleValue + ';'
}

document.write(`<p style="${stylesList}"> ${text} </p>` );

}

buildNode(arr, 'Extremely red tag p!!! Try to change object and you`ll change it`s style');
//4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

//Вывод на экран всех аудиторий;
//Вывод на экран аудиторий для указанного факультета;
//Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
//Функция сортировки аудиторий по количеству мест;
//Функция сортировки аудиторий по названию (по алфавиту).


let list = [{
    name: "Math",
    quontPlace: 11,
    faculty: "Math"
},
{
    name: "Art",
    quontPlace: 15,
    faculty: "ART"
},
{
    name: "IT",
    quontPlace: 20,
    faculty: "Computer science"
},
{
    name: "Biology",
    quontPlace: 18,
    faculty: "Ecology&Biology"
},
{
    name: "GIS",
    quontPlace: 12,
    faculty: "Ecology&Biology"
},
{
    name: "Ecology",
    quontPlace: 14,
    faculty: "Ecology&Biology"
},
{
    name: "Linux",
    quontPlace: 16,
    faculty: "Computer science"
},

]

//tasr4.1 Вывод на экран всех аудиторий;

function getRoom (arr) {
    arr.forEach ((item, index) => {
        console.log(`${index+1}. ${item.name}`);
    })
} 

getRoom(list);

//Task4.2 Вывод на экран аудиторий для указанного факультета;

function getRoomOfFaculty (arr, facultyName) {
    console.log(`Cписок аудиторий факультета ${facultyName}`);
    let count = 0;
    arr.forEach ((item) => {
        if (item.faculty === facultyName) {
            count++;
            console.log(` ${count}. ${item.name}`);
        }
        
    })
} 


getRoomOfFaculty(list, "Ecology&Biology");

//Task4.3 Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;

let group = {
    name: "КН-2021",
    quontStud: 23,
    faculty: "Computer science"
}

function getRoomForGroup(arr, group) {
    console.log(`Cписок аудиторий для группы ${group.name}`);
    let count = 0;
    arr.forEach ((item) => {
        if (item.faculty === group.faculty) {
            count++;
            console.log(` ${count}. ${item.name}`);
        }
        
    })
}

getRoomForGroup(list, group);


//Task 4.4. Функция сортировки аудиторий по количеству мест;

function sortRoomByQuontPlace(arr) {
    console.log(`Cписок аудиторий и количества мест по возрастанию `);
    let cloneArr = arr.slice();

    let newArr = cloneArr.sort((a, b) => {
        return a.quontPlace - b.quontPlace
    })
    
    newArr.forEach ((item, index) => {
        console.log(`${index+1}. ${item.name} - ${item.quontPlace} мест`);
    })
}

sortRoomByQuontPlace(list);


//Task 4.4. Функция сортировки аудиторий по названию (по алфавиту).

function sortRoomByName(arr) {
    console.log(`Cписок аудиторий и количества мест в них, сортировка по названию (по алфавиту) `);
    let cloneArr = arr.slice();


    let newArr = cloneArr.sort((a, b) => {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
        return -1
        if (nameA > nameB)
        return 1
        return 0 // Никакой сортировки
    })
    
    newArr.forEach ((item, index) => {
        console.log(`${index+1}. ${item.name} - ${item.quontPlace} мест`);
    })
}

sortRoomByName(list);

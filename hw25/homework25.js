"use strict"


//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

//Функция для вывода на экран информации об автомобиле;

//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


// Task1.1 2-nd variant. С выводом часов и минут отдельно. И проверкой есть ли время в пути после каждых четырех часов.


let car = {
    manuf: 'Lamborginy',
    model: 'Diablo',
    year: 1986,
    medSpeed: 20,
    getInfo: function () {
        return `Производитель ${this.manuf},  Модель: ${this.model},  Год выпуска: ${this.year}, Средняя скорость: ${this.medSpeed} км/ч`;
    },
    getTime: function (distance) {
        let result = distance / car.medSpeed;
        let relax = 0;
        result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100);
        for (let hour = 1; hour <= result; hour++) {
            if (hour % 5 == 0) {
                relax++;
                result++;
            }
        }       
        let res = result.toFixed(2).split(".");
        // проверка есть ли время в пути после каждых четырех часов
        if (((+res[0]%4)-relax ===0 ) && (+res[1] > 0)) {
            result = result+1;
            res = result.toFixed(2).split(".");
            relax++;
        }
        let mes = (relax === 0)?
        `Что бы пройти эту дистанцию: ${distance} km. Вам нужно - ${res[0]}ч. ${res[1]}мин. и отдыха не нужно`:
        `Что бы пройти эту дистанцию: ${distance} km. Вам нужно - ${res[0]}ч. ${res[1]}мин. из них ${relax} часа отдыха`;
        
        console.log(mes);

        }
    }



console.log(car.getInfo());
    car.getTime(100);
    car.getTime(200);
    car.getTime(170);
    car.getTime(90);
    car.getTime(250);
    car.getTime(240);





// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

//Функция сложения 2-х объектов-дробей;

//Функция вычитания 2-х объектов-дробей;

//Функция умножения 2-х объектов-дробей;

//Функция деления 2-х объектов-дробей;

//Функция сокращения объекта-дроби.


/*

let drob1 = {
    top1: 10,
    down1: 8
};

let drob2 = {
    top2: 1,
    down2: 6
};


// Объект калькулятор дробей

let calc = {
    obj1: drob1,
    obj2: drob2,

    NOD: function () {
        for (var x = arguments[0], i = 1; i < arguments.length; i++) {
            var y = arguments[i];
            while (x && y) {
                x > y ? x %= y : y %= x;
            }
            x += y;
        }
        return x;
    },
    
    plus: function () {
        let top1 = this.obj1.top1;
        let top2 = this.obj2.top2;
        let down1 = this.obj1.down1;
        let down2=this.obj2.down2;
        if (down1 == down2) {
            return `числитель ${top1 + top2}, знаменатель  ${down1}`;
        } else {
            let nod = this.NOD(down1, down2);
            let z =  (down1 / nod)*down2;
            top1 = top1*(down2 / nod);
            top2 = top2*(down1 / nod);
            return `числитель ${top1 + top2}, знаменатель  ${z}`;
        }

    },
    
    minus: function () {
        let top1 = this.obj1.top1;
        let top2 = this.obj2.top2;
        let down1 = this.obj1.down1;
        let down2=this.obj2.down2;
        if (down1 == down2) {
            return `числитель ${top1 - top2}, знаменатель  ${down1}`;
        } else {
            let nod = this.NOD(down1, down2);
            let z =  (this.obj1.down1 / nod)*this.obj2.down2;
            top1 = top1*(down2 / nod);
            top2 = top2*(down1 / nod);
            return `числитель ${top1 - top2}, знаменатель  ${z}`;
        }

    },

    multiply: function () {
        
            return `числитель ${this.obj1.top1*this.obj2.top2}, знаменатель  ${this.obj1.down1*this.obj2.down2}`;        

    },

    divide: function () {
        
        return `числитель ${this.obj1.top1*this.obj2.down2}, знаменатель  ${this.obj1.down1*this.obj2.top2}`;        

    },

    reduceFirst: function () {
        let whole;        
        let div = this.NOD(this.obj1.top1, this.obj1.down1);
        let top = this.obj1.top1/div;
        let down = this.obj1.down1/div;
        if (top >= down) {
            
            if (top%down!=0) {
                whole = Math.trunc(top/down);
                top = top%down;
                down = down;
            } else {
                whole =top/down;
                top = false;               
            }
        }    
        return (top)?`${whole} целая часть, числитель ${top}, знаменатель  ${down}`: `только целая часть  ${whole}`        
    
    }

};

console.log(calc.plus());
console.log(calc.minus());
console.log(calc.multiply());
console.log(calc.divide());
console.log(calc.reduceFirst());

*/ 
 

//Task 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

//Функция вывода времени на экран;

//Функция изменения времени на переданное количество секунд;

//Функция изменения времени на переданное количество минут;

//Функция изменения времени на переданное количество часов. 

//Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
//Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

/*
let time = {
    hour: 3,
    min: 20,
    sec: 50,
    ifZero: function (params) {
        return (params == 0)? "00":params;
    },

    ifShot: function (params) {
        return params <= 9 ? "0" + params : String(params);
    },
    
    getTime: function () {
        let houre = this.ifZero(this.hour);
    
        let min = this.ifZero(this.min);
    
        let sec = this.ifZero(this.sec);  
        
        console.log(houre + ":" + min + ":" + sec);
    },
    
    
    getTimeinSec: function () {
        let houre = this.hour;
    
        let min = this.min;
    
        let sec = this.sec;    
        
        let timeInSec = houre * 3600 + min * 60 + sec;
          
        return timeInSec;
    },  
    
    getNewTimebySec: function (params) {
    
        let sec = params;
            
        let h = Math.trunc(sec / 3600);
        let m = Math.trunc((sec % 3600) / 60);
        sec = (sec % 3600) % 60;
    
        h = this.ifShot(h);
        m = this.ifShot(m);
        sec =this.ifShot(sec);
        if (h>=24) {
            console.log("Время в сумме больше, чем 24 часа, введите правильное время");
         } else {
            console.log("Время в формате:" + h + ":" + m + ":" + sec);
         }
        
    },
    changeTimeOnSec: function (shift) {
        let sec = this.getTimeinSec();
         sec = sec+ shift;
        return (this.getNewTimebySec(sec));
    },
    changeTimeOnMin: function (shift) {
        let sec = this.getTimeinSec();
         sec = sec+ shift*60;
        return (this.getNewTimebySec(sec));
    },

    changeTimeOnHour: function (shift) {
        let sec = this.getTimeinSec();
         sec = sec+ shift*3600;
        return (this.getNewTimebySec(sec));
    }
}

//Проверки
time.getTime();
let getTimeinSec = time.getTimeinSec();
time.getNewTimebySec(getTimeinSec);

time.changeTimeOnSec(10);
time.changeTimeOnMin(10);
time.changeTimeOnHour(10);

*/









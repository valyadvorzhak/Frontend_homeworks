// Task 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

//поле, хранящее радиус окружности;
//get-свойство, возвращающее радиус окружности;
//set-свойство, устанавливающее радиус окружности;
//get-свойство, возвращающее диаметр окружности;
//метод, вычисляющий площадь окружности;
//метод, вычисляющий длину окружности.
//Продемонстрировать работу свойств и методов. 

/*
class Circl {
    constructor(_r) {
        this.r = _r;        
    }

    get radius() {
        return this.r;
    }

    set radius(newRadius) {
        this.r = newRadius;
    }

    get diametr() {
        return this.r*2;
    }

    area() {
        console.log(`Площадь круга: ${3.1415*this.r**2}`);
    }

    ference () {
        console.log(`Длина окружности: ${3.1415*this.r*2}`);
    }


}

let c = new Circl(3);

console.log(c);
//геттер
c.radius = 5;

//сеттер
console.log(c.radius);

c.area();
c.ference();

*/

//Task.2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

//поле, которое хранит цвет маркера;
//поле, которое хранит количество чернил в маркере (в процентах);
//метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
//Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

//Продемонстрировать работу написанных методов. 

/*

class Marker {
    constructor(_color, _quont) {
        this.color = _color;
        this.quont = _quont;        
    }
    

    writeMarker(str) {
        // разбираем строку в массив
        let s = [...str];
        let arrCopy  = s.slice();
        //фильтрация пробелов
        let arr = arrCopy.filter(element =>(element !=' '));
        console.log(s);
        console.log(arr);
        let stylesList = `color:${this.color};`
        let text = '';
        
        for (let i=0, j =0; i< this.quont; i+=0.5, j++) {
            text +=arr[j];
            if (j+1 === arr.length) {
                j = -1;
            } 
        }
        document.write(`<p style="${stylesList}"> ${text} </p>`);
        
    }    
}


class NewMarker extends Marker {
    constructor(_color, _quont, _add) {
        super(_color, _quont);
        this.add = _add;
    }

  
    set addPaint(param) {
        this.quont +=param;
    }

    fillIn() {
        this.quont += this.add
        console.log(this.quont);
    }

    
}

//Создали маркер
let m = new Marker('red', 10);
//Написали маркером, добавляя по 1 букве, кроме пробела, пока он не закончится
m.writeMarker('Danse like Jager');
//Cоздали новый маркер 
let n = new NewMarker('green', 10, 10);
//Дозаправка маркера на 10%
n.fillIn();
//Расходуем новый маркер
n.writeMarker('Play like Jordan')
//Снова дозаправим двойную дозу
n.addPaint = 20;
//Расходуем новый маркер
n.writeMarker('Let It Be')

*/



//3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

//Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().



//Находим в DOM div id 

let divContent = document.getElementById("content");

//Создаем для таблицы div и задаем ему аттрибуты

let tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "tableDiv");
tableDiv.className = "tableDiv";

//Создаем для таблицы div и задаем ему аттрибуты
let tableTag = document.createElement("table");
tableTag.setAttribute("id", "table");
tableTag.className = "table";
//Добавляем новые элементы к родительским
tableDiv.append(tableTag);
divContent.append(tableDiv);


//Создаем класс одного работника
class  Employee {
    constructor(name, position, expierense, salary) {
        this.name = name;
        this.position = position; 
        this.exp = expierense;
        this.salary  = salary;       
    }
}

// Создаем массив экземпляров класса
let arrOfEmp = [
    new Employee("Kianu Rivs", "Plumber", 2, 4000),
    new Employee("Pol Woker", "Cleaner", 7, 3000),
    new Employee("Hue Dansy", "Manager", 20, 15000),
    new Employee("Rikky Martin", "Smith", 1, 10000),
    new Employee("Jony Depp", "Artist", 8, 15000),
    new Employee("Jon Travolta", "HR", 7, 15000),
    new Employee("Jek Nickolson", "psychologist", 45, 35000)]


    console.log(arrOfEmp);
    
//Класс для генерации html на основе массива
    class EmpTable {
        constructor(arr) {
          this.arr = arr;
        }
        getHtml() {
            // Находим таблицу по Id
            let table = document.getElementById("table");
            let array = this.arr;
            //создаем шапку таблицы и задаем стили
            let head = document.createElement("tr");
            head.setAttribute("style", "font-size: 18px;");
            //Создаем столбцы таблицы
            let th1 = document.createElement("th");
            th1.textContent = "Name";
            let th2 = document.createElement("th");
            th2.textContent = "Position";
            let th3 = document.createElement("th");
            th3.textContent = "Expierense (years)";
            let th4 = document.createElement("th");
            th4.textContent = "Salary (UAH)";
            //Добавляем их дочерними в строку таблицы tr
            head.append(th1);
            head.append(th2);
            head.append(th3);
            head.append(th4);
            table.append(head);
            //Создаем столько строк сколько количество работников в массиве 
            //проходимся циклом по каждому i-му члену массива
            for (let i in array) {
                let tr = document.createElement("tr");
                table.append(tr);
                //сразу в каждую строку добавляем ячейки
                // Проходим циклом по j свойстам объекта  - i-го члена массива
                for (let j in array[i]) {
                let td = document.createElement("td");
                // добавляем в текст тега значение j -го свойства i-го объекта в массиве 
                td.textContent = array[i][j];
                tr.append(td);
                td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
                }
            }
            //стилизация таблицы (не рекомендуется через DOM но в д.з допустимо)
            table.setAttribute("border", "2");
            table.setAttribute("bordercolor", "blue");
            table.setAttribute("width", "60%");
            table.setAttribute("style", "margin: auto; background-color: pink;");
        }
    }

let tableOfEmp = new EmpTable(arrOfEmp);
tableOfEmp.getHtml();
    
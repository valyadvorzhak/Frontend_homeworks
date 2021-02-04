
//Look at page without F12!!! Save kangaroos!!! 

//1. Создать страницу, которая выводит нумерованный список песен:

//Находим в DOM div id 

let divContent = document.getElementById("content");

//Создаем списка ol єлемент и задаем ему аттрибуты

let list = document.createElement("ol");
list.setAttribute("id", "list");
list.className = "songlist";
let p = document.createElement("ol");
p.textContent = "The Playlist of super rock stars!!!"
p.setAttribute("style", "color: orange; font-size: 24px; font-weight: 800;");

divContent.append(p);
divContent.append(list);

let playList = [

    {
    
     author: "LED ZEPPELIN",
    
     song:"STAIRWAY TO HEAVEN"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"BOHEMIAN RHAPSODY"
    
    },
    
    {
    
     author: "LYNYRD SKYNYRD",
    
     song:"FREE BIRD"
    
    },
    
    {
    
     author: "DEEP PURPLE",
    
     song:"SMOKE ON THE WATER"
    
    },
    
    {
    
     author: "JIMI HENDRIX",
    
     song:"ALL ALONG THE WATCHTOWER"
    
    },
    
    {
    
     author: "AC/DC",
    
     song:"BACK IN BLACK"
    
    },
    
    {
    
     author: "QUEEN",
    
     song:"WE WILL ROCK YOU"
    
    },
    
    {
    
     author: "METALLICA",
    
     song:"ENTER SANDMAN"
    
    }
    
    ];



    for (let i in playList) {
        let li = document.createElement("li");
        list.appendChild(li);
        
        text = `${playList[i].author}  "${playList[i].song}" `;
        li.textContent = text;
        
        li.setAttribute("style", "padding: 5px 10px; font-size: 18px; color: #fff; font-family: Helvetica, Arial, sans-serif;");
    }
    
  

//3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let btn = document.getElementById("go");

btn.addEventListener("click", function() {
  if (red.classList.contains("red")) {
    red.classList.remove("red");
    yellow.classList.add("yellow");
  } else if (yellow.classList.contains("yellow")) {
    yellow.classList.remove("yellow");
    green.classList.add("green");
  } else if (green.classList.contains("green")) {
    green.classList.remove("green");
    red.classList.add("red");
  }
});


//2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
//На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. 
//При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

  let overlay = document.getElementById("win1");
  let popap = document.querySelector(".popup");
  


function openModal () {
  
  overlay.classList.add("overlay--target");

  popap.classList.add("popup--target");
  
}


function closeModal () {
  
  overlay.classList.remove("overlay--target");

  popap.classList.remove("popup--target");
  
}
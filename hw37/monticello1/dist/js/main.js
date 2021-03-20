const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    });
};


let form = document.getElementById('formsub');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let formElements = form.elements;
    console.log(formElements);
    let obj ={};
    for (var i=0; i< formElements.length; i++) {
        if (formElements[i].type!="submit") {
            obj[formElements[i].name] = formElements[i].value;
            window.localStorage.setItem(formElements[i].name, formElements[i].value)
        }      
    
    }
    
    console.log(obj);

})




/*
let projectsList = document.getElementsByClassName("inline-photo");
let projectHeights = []
for (let i = 0; i < projectsList.length; i++) {
    projectHeights.push(projectsList[i].getBoundingClientRect().top - 470);
};

document.onscroll = function () {
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

    for (let i = 0; i< projectHeights.length; i++) {
        if (projectHeights[i] <= scrollTop)  {

            projectsList[i].classList.add('is-visible');
        }
    }
        
    
}

*/

let projectsList, prjectsHeigts;

document.addEventListener("DOMContentLoaded", function(event) {
    
    projectsList = document.getElementsByClassName("inline-photo");
    prjectsHeigts = [];
    for (let i = 0; i < projectsList.length; i++) {
        prjectsHeigts.push(projectsList[i].getBoundingClientRect().top);
    };

});

document.onscroll = function () {
    let scrollTop = (document.documentElement && document.documentElement.scrollTop + 500) ||
        document.body.scrollTop;

    for (let i = 0; i < prjectsHeigts.length; i++) {
        if (prjectsHeigts[i] <= scrollTop) {
            console.log(scrollTop)
            projectsList[i].classList.add('is-visible');
        }       
    }   
}


//****  New animations. 19.03.21 */

// все єлементы с классом  всегда выезжают слева

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length >0) {
    window.addEventListener('scroll', animOnScroll); // событие на окно браузер при скроле
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeigh = animItem.offsetHeight; //высота объекта
            const animItemOffset = offset(animItem).top; // позиция объекта относительно верха, насколько объект находится ниже, чем верх страницы
            const animStart = 4; // коєффмциент, регулирующий момент старта анимации, достиженеи скролом 1/4 его высоты
            //Настройка момента старта анимации
            let animItemPoint = window.innerHeight - animItemHeigh/animStart;  //высота окна браузера минус часть высоты элемента

            // Если анимированный элемент выше по высоте окна браузера
            if(animItemHeigh>window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart; // высота окна браузера минус часть окна браузера
            }
            // если мы прокрутили больше чем, поцизия объекта минус точка старта, но при этом меньше, чем позиция эл-та минус его высота
            if ((pageYOffset > animItemOffset - animItemPoint) &&pageYOffset < (animItemOffset + animItemHeigh) ) {          //pageYOffse - собирает данные о количестве проскроленных пикселей
                animItem.classList.add('animate__animated', 'animate__bounceInLeft'); //добавить класс с анимацией
            } else {
                animItem.classList.remove('animate__animated', 'animate__bounceInLeft');//для повторного анимирования
            }

        }
    }
    // функия определения позиции єлемента относительно верха или края страницы
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    // 
    setTimeout(() => {
        animOnScroll();
    }, 300);

   
}

// при клике на картинку она вращается один раз 

let flipOnHover  = document.querySelector('.flips');


     flipOnHover.addEventListener('click', animOnHover); // событие 

            function  animOnHover() {
                if( flipOnHover.classList.contains('animate__flip')) {
                    flipOnHover.classList.remove('animate__animated', 'animate__flip')
                }

                flipOnHover.classList.add('animate__animated', 'animate__flip');
                        
            }
            
    


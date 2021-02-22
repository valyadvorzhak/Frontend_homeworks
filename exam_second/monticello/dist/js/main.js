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
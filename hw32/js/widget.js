//for test put   title :The Lego movie    movie , ,  not overload page
//for next test put title :lego    movie ,  not overload page

let form = document.getElementById('ajax_form');

let listPlaceholder = document.querySelector('#filmList');
let listFilm = document.querySelector('#filmInfo');
let url;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    listPlaceholder.innerHTML="";
    let formElements = form.elements;
    console.log(formElements);
    let obj ={};
    for (var i=0; i< formElements.length; i++) {
        if (formElements[i].type!="submit") {
            obj[formElements[i].name] = formElements[i].value;
        }
    }
    
    console.log(obj.type, obj);
    
    url = `http://www.omdbapi.com/?apikey=4c6511d&s=${obj.title}&type=${obj.type}`;

    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(list) {
        pages = list.totalResults;
        console.log(pages);
        

        let films = document.createElement('ul');
            films.className = 'bulleted'; 

        for (let index = 0; index < list.Search.length; index++) {
            let item = document.createElement('li');
            let details = document.createElement('button');

            
            item.className = 'in';
            details.className = "detailsButton";

            item.setAttribute('id', `${index}`);            
            details.dataset.id = list.Search[index].imdbID;

            item.innerHTML = list.Search[index].Title;
            details.textContent = 'DETAILS';
            
            films.append(item);      
              
            films.append(details);
        }
        
        listPlaceholder.append(films);
        
        
        if (pages>10) {
            k=Math.ceil(pages/10);
            for (let i =1; i<=k; i++) {
                let page = document.createElement('button');
                page.className = "nextButton";
                page.textContent = i;
                page.dataset.id = i;
                listPlaceholder.append(page);
            }

            

        }
       
    }).catch(
        function(error){
            listPlaceholder.append(`Movie not found`)
        }
    )
        e.stopPropagation();
  })


  listPlaceholder.addEventListener('click', function (e) {
    if (e.target.className == "nextButton") {
        listFilm.innerHTML = '';
        let pageId = e.target.dataset.id;
        console.log(pageId);
        getPage (pageId);
    }

    
        
        if (e.target.className == "detailsButton") {
            let buttonId = e.target.dataset.id;                        
            console.log('buttonID ='+buttonId);
            let filmId = buttonId;
            console.log(`filmID =${filmId}`);
            getInfo (filmId);
        }
    
        e.stopPropagation();   
}) 


  function getPage (PageId) {

    let url1 = `${url}&page=${PageId}`;
    console.log(url1);
    
    fetch(url1)
    .then(function(response) {
        return response.json();
    }).then(function(list) {
        pages = list.totalResults;
        console.log(pages);
        listPlaceholder.innerHTML="";

        let films = document.createElement('ul');
            films.className = 'bulleted'; 

        for (let index = 0; index < list.Search.length; index++) {

            let item = document.createElement('li');
            let details = document.createElement('button');

            
            item.className = 'in';
            details.className = "detailsButton";

            item.setAttribute('id', `${index}`);            
            details.dataset.id = list.Search[index].imdbID;

            item.innerHTML = list.Search[index].Title;
            details.textContent = 'DETAILS';
            
            films.append(item);      
              
            films.append(details);
        }
        
        listPlaceholder.append(films);
        
        
        if (pages>10) {
            k=Math.ceil(pages/10);
            for (let i =1; i<=k; i++) {
                let page = document.createElement('button');
                page.className = "nextButton";
                page.textContent = i;
                page.dataset.id = i;
                listPlaceholder.append(page);
            }        
         
        }     
    

    })  
}



function getInfo (filmId) {
    listFilm.innerHTML = '';

    let filmUrl = `http://www.omdbapi.com/?apikey=4c6511d&i=${filmId}`
    console.log(filmUrl);
    
    fetch(filmUrl)
    .then(function(response) {
        return response.json()
    }).then(function(info) {

        console.log(info);


        let filmInfo = document.createElement('ul');

        for (key in info) {
            let item = document.createElement('li');

            if (key == "Ratings") {
                let arr = info[key];
                console.log(arr);
                              
                let str = arr.reduce((result, arr) => {                    
                    
                for (key1 in arr) { 
                    result += `${arr[key1]} `
                    //break;
                }
                return `${result}.  `; 
                }, '')
                

                item.innerHTML = key + ': ' + str;
            } else {
                item.innerHTML = key + ': ' + info[key]; 
            }                      

            filmInfo.append(item);
        }
        
        listFilm.append(filmInfo);

       
    })  
}




//const url = "http://www.omdbapi.com/?apikey=4c6511d&s=The Lego Movie&type=movie";


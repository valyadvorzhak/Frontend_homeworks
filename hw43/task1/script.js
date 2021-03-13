const sample = new Vue({
    el: "#app",
    data: {
        search: "",
        typedSearch: "",
        value: "",
        typedSearchIsShown: false,     
        colors: ["orange", "red", "green", "blue", "pink"]
    },

    methods: {

        checAsis(arr, val) {
            return arr.some(function(arrVal) {
                return val === arrVal;
              });
        },

        saveSearch() {
            this.typedSearch = this.search;  
            let colorsArr = this.colors;          
            
            for (let i = 0; i < colorsArr.length; i++) {
                
                if ((colorsArr[i] == this.search) ) {
                    this.value = colorsArr[i]
                }
            this.typedSearchIsShown = true;
            }

            if (!this.checAsis(colorsArr, this.search)) {                
                this.value = this.search;
                this.typedSearch = 'There is not this color in List: ' + this.search; 
            }
            
            this.search = "";
        },

        addSearch() {
            let colorsArr = this.colors; 

            if (!this.checAsis(colorsArr, this.search)) {                
               colorsArr.push(this.search);               
            } else {
                this.typedSearchIsShown = true;
                this.typedSearch = 'This color is already in List: ' + this.search;
                this.value = this.search; 
            }
            
            this.search = "";

        }
       
    },
})
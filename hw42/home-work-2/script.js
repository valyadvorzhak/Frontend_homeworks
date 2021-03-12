const sample = new Vue({
    el: "#app",
    data: {
        isEnter: false,
        container: "",
        typedSearch: "",       
        isTyped: false,
        textButton: "Leave the Matrix"
     
        
    },
    methods: {
        enterPage() {
            if (!this.isEnter) {
                this.container = true;
                this.textButton = "Moove back the Matrix";
                this.isEnter = true;
            } else {
                this.container = false;
                this.textButton = "Leave the Matrix";
                this.isEnter = false;
            }
          
        },

        doVar1(event) {
            tab=event.which;
            switch (tab) {
                case 1:
                    this.typedSearch ='Left mouse button';
                    break;
                case 2:
                    this.typedSearch ='Middle mouse button';
                    break;
                /*case 3:
                    this.typedSearch ='Правая кнопка';
                    break;*/          
            
            }
            
        },

        doRight() {
            this.typedSearch ='Right Mouse button';
        },
        doVar2() {
            date = new Date();
            this.typedSearch = `You Leave The Matrix: ${date.toLocaleString()}`;
        }
        
    },
})
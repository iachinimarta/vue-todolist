const app = new Vue ({
    el: "#app",
    data: {
        list: [],

        newElement: {
            text: '',
            done: false
        }
    },
    
    methods: {
        deleteElement(index) {
            this.list.splice(index);
        },

        addElement() {
            if (this.newElement.text == "") {
                alert("Inserisci un elemento valido!");
            } else {
                this.list.push({
                    text: this.newElement.text,
                    done: false
                });
                this.newElement.text = '';
            }
        },

        checkElement(element) {
            if (element.done == false){
                element.done = true
            } else if (element.done == true) {
                element.done = false
            }
        }
    }
})

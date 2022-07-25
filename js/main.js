const app = new Vue ({
    el: "#app",
    data: {
        list: [
            {
                text: "prova",
                done: false
            },
        ],
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
            this.list.push({
                text: this.newElement.text,
                done: false
            });
            this.newElement.text = '';
        },

        checkElement(element) {
            element.done = true;
        }
    }
})

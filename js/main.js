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
            this.list.push(this.newElement);
        }
    }
})
let app = new Vue({
    el: "#vueApp",
    data: {
        title: 'Things to do!',
        items:[
            {id:1, name:'Task 1', completed:false},
            {id:1, name:'Task 2', completed:false},
            {id:1, name:'Task 3', completed:false}
        ],
        newItem:'',
    },
    mounted() {
        // console.log('App mounted!');
        if (localStorage.getItem("items")) {
          this.items = JSON.parse(localStorage.getItem("items"));
        }
      },
    methods:{

        addItem: function() {
            this.items.push({
              id: this.items.length + 1,
              name: this.newItem,
              completed: false,
            });
            this.newItem = '';
          },
        
        toggleComplete: function(item) {
            item.completed = !item.completed;
          },
        
        removeItem: function(item) {
            this.items.splice(this.items.indexOf(item),1)
        }
    },
    watch: {
        items: {
          handler() {
            // console.log('Todos changed!');
            localStorage.setItem("items", JSON.stringify(this.items));
          },
          deep: true
        }
    },
});

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 56,
      x: 0,
      y: 0
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
  },
  handleMousemove(e) {
    this.x = e.offsetX;
    this.y = e.offsetY;
  },
});

//apunta al componente que mostrar en el DOM
//DOM, la estructura de objetos que genera el navegador en memoria para cada uno de los elementos de la página.
app.mount("#app");

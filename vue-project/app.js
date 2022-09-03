const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "The Final Empire", author: "Brandon Sanderson" , img: 'assets/1.jpg' },
        {title: 'the way o kings', author: 'Patrick Rothfuss', img: 'assets/2.jpg' },
        {title: 'three tales of a chemical romance ', author: 'Irvine Wells', img: 'assets/3.jpg' }]
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  }
});

//apunta al componente que mostrar en el DOM
//DOM, la estructura de objetos que genera el navegador en memoria para cada uno de los elementos de la página.
app.mount("#app");

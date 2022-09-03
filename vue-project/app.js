const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "The Final Empire", author: "Brandon Sanderson" },
        {title: 'the way o kings', author: 'Patrick Rothfuss'},
        {title: 'three tales of a chemical romance ', author: 'Irvine Wells'}]
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

const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "The Final Empire", author: "Brandon Sanderson", img: 'src/assets/1.jpg', isFav: true },
        { title: 'the way o kings', author: 'Patrick Rothfuss', img: 'src/assets/2.jpg', isFav: true },
        { title: 'three tales of a chemical romance ', author: 'Irvine Wells', img: 'src/assets/3.jpg', isFav: false }
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    }
  },
    computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
});

//apunta al componente que mostrar en el DOM
//DOM, la estructura de objetos que genera el navegador en memoria para cada uno de los elementos de la página.
app.mount("#app");

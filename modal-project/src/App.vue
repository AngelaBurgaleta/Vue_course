<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Givaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>

  </div>
  <div v-if="showModalTwo">
    <Modal @closeTwo = "toggleModalTwo">
      <h1>ModalDos</h1>
      <template v-slot:linksTwo>
        <a href="#">sign up now 2</a>
        <a href="#">more info 2</a>
      </template>
      <button @click="toggleModalTwo">close modal two</button>
    </Modal>

  </div>
  <button @click.alt="toggleModal">open modal (alt click)</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
// challenge
//create an extra button to open a different modal
//use the same modal component but pass in a different template (slot)
//use a different method (toggleModaltwo) and data (showModalTwo)
import Modal from './components/Modal'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App!',
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
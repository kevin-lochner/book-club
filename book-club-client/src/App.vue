<template>

  <!--This entire project is a very close adaptation of the student sign in app we did for a lab--I'm noting that once here, rather 
  than in each place that uses similar code. I tried many other things but I don't understand any of this well enough to make them work, 
  especially once routing etc. gets involved most attempts have been deleted, but a few that were at least at one point working in the 
  client before they could be connected to the back end remain in the files, commented out.-->

<!--HTML for the app structure-->

  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="container-fluid">
      <div class="row">

        <div class="col-sm-6">
            <AddBook
            v-on:addBook="addBook"
            ></AddBook>
        </div>

        <div class="col-sm-6">
          <!--v-on:createVoteList='createVoteList' would be part of PotentialBookList-->
            <PotentialBookList
            v-bind:potentialBooks='potentialBooks'
            v-on:deleteBook='deleteBook'
            ></PotentialBookList>
        </div>
        
      </div>
      <!--
      <div class="row">
        <VoteList
        v-show="voteOptions"
        v-bind:voteOptions='voteOptions'
        ></VoteList>
      </div>
      -->
    <div class="header">
      <Footer></Footer>
    </div>

    </div>
  </div>
</template>

<script>
//Import components
import AddBook from './components/AddBook.vue'
import PotentialBookList from './components/PotentialBookList.vue'
//import VoteList from './components/VoteList.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      potentialBooks: [],
      //voteOptions: [],
    }
  },
  components: {
    AddBook,
    PotentialBookList,
    //VoteList
    Header,
    Footer
  },
  mounted() {
    // Run this right away
    this.updatePotentialBooks()
  },
  methods: {
    // Method to add a book
    addBook(book) {
      this.$potentialBook_API.addPotentialBook(book).then( student => {
        this.updatePotentialBooks()
      }).catch( err => {
        let message = err.response.data.join(', ')
        alert('Error adding new book')
      })
    },
    deleteBook(book) {
      this.$potentialBook_API.deletePotentialBook(book).then ( () =>{
        this.updatePotentialBooks()
      })
    },
    updatePotentialBooks(){
      this.$potentialBook_API.getAllPotentialBooks().then( potentialBooks => {
        this.potentialBooks = potentialBooks
      })
    },
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
</style>

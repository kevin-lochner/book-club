<template>
    <div id="addBook">
        <h4>Add a book to the potential selection list</h4>
            <ul class="alert alert-danger" v-show="error" v-for="error in errors" v-bind:key="error">
                <li>{{error}}</li>
            </ul>

        <div>
            <label for="title">Title</label><br>
            <input id="title" v-model="title">
        </div>

        <div>
            <label for="authorFirst">Author first name</label><br>
            <input id="authorFirst" v-model="authorFirstName">
        </div>

        <div>
            <label for="authorLast">Author last name</label><br>
            <input id="authorLast" v-model="authorLastName">
        </div>

        <div>
            <label for="genre">Genre</label><br>
            <input id="genre" v-model="genre">
        </div>

       <button v-on:click="addBook" class="btn btn-primary">Add</button>


    </div>
</template>

<script>

export default {
    name: 'AddBook',
    data() {
        return {
            title: '',
            authorFirstName: '',
            authorLastName: '',
            genre: '',
            errors: [],
        }
    },
    methods: {
        addBook() {
            this.errors = []
            if(!this.title) {
                this.errors.push('Title is required')
            } 
            if(!this.authorFirstName) {
                this.errors.push('Author first name is required')
            }
            if(!this.authorLastName) {
                this.errors.push('Author last name is required')
            }
            if(this.errors.length < 1){
                let newBook = {title: this.title, authorFirstName: this.authorFirstName, authorLastName: this.authorLastName, genre: this.genre}
                this.$emit('addBook', newBook)
                this.title = ''
                this.authorFirstName = ''
                this.authorLastName = ''
                this.genre = ''
            }

        }
    }
}

</script>

<style scoped>

label {
    text-align: left;
    margin-top: 10px;
}

button {
    margin-top: 15px;
    margin-bottom: 15px;
}

#addBook{
    text-align: center;
}

</style>
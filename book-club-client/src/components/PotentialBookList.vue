<template>
    <div id="potentialBooks">
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Delete</th>
                    <!--<th>Add to vote list</th>-->
                </tr>
            </thead>
            <tbody>
                <!-- v-on:voteCheckChange="voteCheckChange" would be part of potentialBookRow-->
                <PotentialBookRow
                v-for="potentialBook in potentialBooks" v-bind:key="potentialBook.title"
                v-bind:potentialBook="potentialBook"
                v-on:deleteBook="deleteBook"
                ></PotentialBookRow>
            </tbody>
        </table>

    <!--

    <ul class="alert alert-danger" v-show="error" v-for="error in errors" v-bind:key="error">
        <li>{{error}}</li>
    </ul>

    <button class="btn btn-primary" v-on:click="createVoteList">Add selected to vote list</button>
    -->

    </div>

</template>

<script>

import PotentialBookRow from '@/components/PotentialBookRow.vue'

export default {
    name: 'potentialBookList',
    components: {PotentialBookRow},
    data() {
        return {
            /*
            voteOptions: [],
            errors: []
            */
        }
    },
    props: {
        potentialBooks: Array
    },
    watch: {
        
    },
    methods: {
        deleteBook(book) {
            this.$emit('deleteBook', book)
        },
        /*
        voteCheckChange(potentialBook) {
            if (this.voteOptions.includes(potentialBook)){
                let removalIndex = this.Options.indexOf(potentialBook)
                this.voteOptions.splice(removalIndex, 1)
            } else {
                this.voteOptions.push(potentialBook)
            }
        },
        createVoteList(voteOptions){
            this.errors = []
            if(this.voteOptions.length > 5 || this.voteOptions.length < 3){
                this.errors.push('You need between three and five selections to build a vote list')
            } else {
                this.$emit('createVoteList', voteOptions)
            }
        }*/
    }
}
</script>

<style>

</style>
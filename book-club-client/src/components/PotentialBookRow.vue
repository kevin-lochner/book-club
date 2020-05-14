<template>
    <tr>
        <td>{{potentialBook.title}}</td>
        <td>{{fullName}}</td>
        <td>{{potentialBook.genre}}</td>
        <td>
            <img class="delete-image" v-on:click="deleteBook(potentialBook)" src="@/assets/delete.png">
        </td>
        <!--
        <td><input id="addToVote" class="form-check-input" type="checkbox" v-model="addToVote"></td>
        -->
    </tr>

</template>

<script>

export default {
    name: 'PotentialBookRow',
    data() {
        return {
            /*
            addToVote: false
            */
        }
    },
    props: {
        potentialBook: Object    
    },
    computed: {
        fullName: function() {
            return this.potentialBook.authorFirstName + ' ' + this.potentialBook.authorLastName
        }    
    },
    watch: {
        addToVote: function() {
            this.voteCheckChange(this.potentialBook)
        }
    },
    methods: {
        deleteBook(book) {
            if(confirm(`Delete ${book.title}?`)) {
                this.$emit('deleteBook', book)
            }
        },
        /*
        voteCheckChange(potentialBook){
            this.$emit('voteCheckChange', potentialBook)
        }
        */
    }
}

</script>

<style scoped>

.delete-image {
    height: 25px;
}

</style>
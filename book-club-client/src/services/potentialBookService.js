import axios from 'axios'

const base_url = '/api/potentialBooks'

export default {

    getAllPotentialBooks() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    addPotentialBook(potentialBook) {
        return axios.post(base_url, potentialBook).then( response => {
            return response.data
        })
    },

    updatePotentialBook(potentialBook) {
        return axios.patch(`${base_url}/${potentialBook.id}`, potentialBook).then (response =>{
            return response.data
        })
    },

    deletePotentialBook(potentialBook) {
        return axios.delete(`${base_url}/${potentialBook.id}`, potentialBook).then (response =>{
            return response.data
        })
    }

}
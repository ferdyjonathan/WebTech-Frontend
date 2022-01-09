<template>
  <h1>Delete Order</h1>
  <p><router-link :to="{ name: 'Dashboard' }">Return to Order</router-link></p>
  <form v-on:submit="deleteOrder">
    <p><button class="btn btn-danger">Delete Product</button></p>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'delete-order',
  props: [],
  data () {
    return {
      bestellung: {}
    }
  },
  created: function () {
    this.getOrder()
  },
  methods: {
    getOrder: function () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/api/bestellungs'
      axios.get(endpoint + this.$route.params.id)
        .then((response) => {
          this.bestellung = response.body
        }, (response) => {

        })
    },
    deleteOrder: function () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/api/bestellungs/'
      axios.delete(endpoint + this.$route.params.id, this.bestellung, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px; /* 40px/16=2.5em */
}
</style>

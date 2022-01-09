<template>
  <div id="update-product">
    <h1>Update Product</h1>

    <p><router-link :to="{ name: 'Dashboard' }">Return to Order</router-link></p>

    <form v-on:submit="editProduct">
      <div class="form-group">
        <label name="bestellung_id">ID</label>
        <input type="text" class="form-control" disabled v-model="bestellung.id" id="bestellung_id">
      </div>

      <div class="form-group">
        <label for="nameField" class="form-label">Name</label>
        <input type="text" class="form-control" id="nameField" v-model="bestellung.name" required>
      </div>

      <div class="form-group">
        <label for="paketField" class="form-label">Paket</label>
        <select id="paketField" class="form-select" v-model="bestellung.paket" required>
          <option value="" selected disabled>Choose...</option>
          <option value="Special Service">Special Service</option>
          <option value="One day Service">One day Service</option>
          <option value="Press Only">Press Only</option>
          <option value="Dry Cleaning">Dry Cleaning</option>
        </select>
      </div>

      <div class="form-group">
        <label for="statusField" class="form-label">Status</label>
        <select id="statusField" class="form-select" v-model="bestellung.status" required>
          <option value="" selected disabled>Choose...</option>
          <option value="New">New</option>
          <option value="in Progress">In Progress</option>
          <option value="Finish">Finish</option>
        </select>
      </div>

      <div class="form-group">
        <label for="totalpriceField" class="form-label">Total Price</label>
        <input type="text" class="form-control" id="totalpriceField" v-model="bestellung.totalprice" required>
      </div>

      <div class="form-group">
        <input class="form-check-input" type="checkbox" id="paymentField" v-model="bestellung.payment">
        <label class="form-check-label" for="paymentField">
          &nbsp;&nbsp;Bezahlt
        </label>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'edit-product',
  data () {
    return {
      bestellung: {}
    }
  },
  methods: {
    editProduct: function () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/api/bestellungs/'
      axios.put(endpoint + this.$route.params.id, this.bestellung, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(error => console.log('error', error))
    },
    getProduct: function () {
      axios.get('http://localhost:8080/api/bestellungs/' + this.$route.params.id)
        .then((response) => {
          this.bestellung = response.body
        }, (response) => {

        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>

</style>

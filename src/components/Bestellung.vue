<template>
  <div class="bestellung"></div>
  <div id="all-products">
    <h1 style="font-weight:normal; text-align: center;">List of Product</h1>
    <div>
      <input v-model="nameField" placeholder="Name" type="text" ref="nameInput">
      <input v-model="paketField" placeholder="Paket" type="text" ref="paketInput">
      <input v-model="paymentField" placeholder="Payment" type="text" ref="paymentInput">
      <input v-model="statusField" placeholder="Status" type="text" ref="statusInput">
      <input v-model="totalpriceField" placeholder="Total Price" @keyup.enter="save()">
      <button type="button" @click="save()">Create</button>
    </div>
    <div class="form-group">
      <input type="text" name="search" v-model="productSearch" placeholder="search products" class="form-control" v-on:keyup="searchProducts">
    </div>
      <tr>
        <td>{{ nameField }}</td>
        <td>{{ paketField }}</td>
        <td>{{ paymentField }}</td>
        <td>{{ statusField }}</td>
        <td>{{ totalpriceField }}</td>
      </tr>
  </div>
</template>

<script>
export default {
  name: 'Bestellung',
  props: ['msg'],
  data () {
    return {
      bestellungs: [],
      originalProducts: [],
      productSearch: '',
      nameField: '',
      paketField: '',
      paymentField: '',
      statusField: '',
      totalpriceField: ''
    }
  },
  methods: {
    // fetchProductData: function () {
    //   const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
    //   const endpoint = baseUrl + '/api/bestellungs'
    //   this.$http.get(endpoint).then((response) => {
    //     this.bestellungs = response.body
    //     this.originalProducts = this.bestellungs
    //   }, (response) => {
    //   })
    // },
    // searchProducts () {
    //   if (this.productSearch === '') {
    //     this.bestellungs = this.originalProducts
    //     return
    //   }
    //   var searchedProducts = []
    //   for (var i = 0; i < this.originalProducts.length; i++) {
    //     var productName = this.originalProducts[i].name.toLowerCase()
    //     if (productName.indexOf(this.productSearch.toLowerCase()) >= 0) {
    //       searchedProducts.push(this.originalProducts[i])
    //     }
    //   }
    //   this.bestellungs = searchedProducts
    // },
    save () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/api/bestellungs'
      const data = {
        name: this.nameField,
        paket: this.paketField,
        payment: this.paymentField,
        status: this.statusField,
        totalprice: this.totalpriceField
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch(error => console.log('error', error))
    }
  },
  mounted () {}
}
</script>

<style scoped>

</style>

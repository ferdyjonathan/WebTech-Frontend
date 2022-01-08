<template>
  <h1>List of Product</h1>
  <div class="container-fluid">
    <div class="form-group">
      <input type="text" name="search" v-model="productSearch" placeholder="Search Order" class="form-control" v-on:keyup="searchProducts">
    </div>
    <bestellungs-list :bestellungs="this.bestellungs"></bestellungs-list>
  </div>
  <bestellung-create-form @created="addOrder"></bestellung-create-form>
</template>

<script>
import BestellungsList from '@/components/BestellungsList'
import BestellungCreateForm from '@/components/BestellungCreateForm'

export default {
  name: 'Dashboard',
  components: {
    BestellungCreateForm,
    BestellungsList
  },
  data () {
    return {
      bestellungs: [],
      originalProducts: [],
      productSearch: ''
    }
  },
  methods: {
    addOrder (orderLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + orderLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(bestellung => this.bestellungs.push(bestellung))
        .catch(error => console.log('error', error))
    },
    searchProducts: function () {
      if (this.productSearch === '') {
        this.bestellungs = this.originalProducts
        return
      }

      var searchedProducts = []
      for (var i = 0; i < this.originalProducts.length; i++) {
        var productName = this.originalProducts[i].name.toLowerCase()
        if (productName.indexOf(this.productSearch.toLowerCase()) >= 0) {
          searchedProducts.push(this.originalProducts[i])
        }
      }
      this.bestellungs = searchedProducts
    }
  },
  mounted () {
    const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
    const endpoint = baseUrl + '/api/bestellungs'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(bestellung => {
        this.bestellungs.push(bestellung)
        this.originalProducts = this.bestellungs
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>
h1 {
  font-size: 30px; /* 40px/16=2.5em */
}
.container-fluid{
  background: url("../assets/white_desert_dune-wallpaper-1920x1080.jpg") no-repeat fixed 100% 100%;
  background-attachment: fixed;
  position: relative;
  height: 100vh;
}

</style>

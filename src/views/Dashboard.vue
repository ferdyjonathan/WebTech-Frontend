<template>
  <h1>List of Product</h1>
  <div class="container-fluid">
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
      bestellungs: []
    }
  },
  methods: {
    loadThings () {
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
        }))
        .catch(error => console.log('error', error))
    },
    addOrder (personLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + personLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(person => this.persons.push(person))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    this.loadThings()
  }
}
</script>

<style scoped>
h1 {
  font-size: 30px; /* 40px/16=2.5em */
}
</style>

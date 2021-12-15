<template>
  <div class="Dashboard">
    <table class="table table-hover" style=" overflow : hidden; border-radius : 4px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0,15);">
      <thead>
      <tr style="color : white; font-weight : bold; background: #3a6d8c ">
        <td>Id</td>
        <td>Name</td>
        <td>Paket</td>
        <td>Payment</td>
        <td>Status</td>
        <td>totalpreis</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="bestellung in bestellungs" :key="bestellung.id">
        <td>{{ bestellung.id }}</td>
        <td>{{ bestellung.name }}</td>
        <td>{{ bestellung.paket }}</td>
        <td>{{ bestellung.payment? 'Bezahlt' : 'Unbezahlt' }}</td>
        <td>{{ bestellung.status }}</td>
        <td>{{ bestellung.totalprice }}</td>
<!--          <router-link :to="{name: 'edit_product', params: { id: bestellung.id }}" class="btn btn-outline-primary" style="">Modifier</router-link>-->
<!--          <router-link :to="{name: 'delete_product', params: { id: bestellung.id }}" class="btn btn-outline-danger">Supprimer</router-link>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      bestellungs: [
        // { id: 1, name: 'Ferdy', paket: 'Duvet', payment: true, status: 'new', totalprice: 2.0 },
        // { id: 2, name: 'Jonathan', paket: 'Shoes', payment: true, status: 'new', totalprice: 3.08 }
      ]
    }
  },
  methods: {
    mounted () {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch('/bestellungs', requestOptions)
        .then(rensponse => rensponse.json())
        .then(result => result.forEach(bestellung => {
          this.bestellungs.push(bestellung)
        }))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

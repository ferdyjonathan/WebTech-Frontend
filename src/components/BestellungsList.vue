<template>
  <div class="bestellungslist"></div>
  <div id="all-products">
  <table class= "table table-hover" style=" overflow : hidden; border-radius : 4px ; box-shadow: 0 4px 20px rgba(0, 0, 0, 0, 15);">
    <thead>
    <tr style="color : white; font-weight : bold; background: #3a6d8c ">
      <td>Name</td>
      <td>Paket</td>
      <td>Payment</td>
      <td>Status</td>
      <td>Total price</td>
      <td>Actions</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="bestellung in sortedArray" v-bind:key="bestellung.id">
      <td>{{ bestellung.name }}</td>
      <td>{{ bestellung.paket }}</td>
      <td>{{ bestellung.payment? 'Bezahlt' : 'Unbezahlt' }}</td>
      <td>{{ bestellung.status }}</td>
      <td>{{ bestellung.totalprice }}</td>
      <td>
      <router-link :to="{ name: 'edit_product', params: { id: bestellung.id }}" class="btn btn-danger">Edit</router-link>
      <router-link :to="{ name: 'delete_product', params: { id: bestellung.id }}" class="btn btn-danger">Delete</router-link></td>
<!--      <button class="btn btn-danger" v-on:click="deleteOrder(index)">Delete</button>-->
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'BestellungsList',
  components: {},
  computed: {
    sortedArray: function () {
      function compare (a, b) {
        if (a.id < b.id) { return -1 }
        if (a.id > b.id) { return 1 }
        return 0
      }

      // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
      return this.bestellungs.sort(compare)
    }
  },
  props: {
    bestellungs: {
      type: Array,
      required: true
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>

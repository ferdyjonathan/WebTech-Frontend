<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#persons-create-offcanvas" aria-controls="#persons-create-offcanvas">
    <i class="bi bi-person-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="persons-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Create Order</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="order-create-form" novalidate>
        <div class="mb-3">
          <label for="nameField" class="form-label">Name</label>
          <input type="text" class="form-control" id="nameField" v-model="nameField" required>
          <div class="invalid-feedback">
            Please provide the name.
          </div>
        </div>
        <div class="mb-3">
          <label for="paketField" class="form-label">Paket</label>
          <select id="paketField" class="form-select" v-model="paketField" required>
            <option value="" selected disabled>Choose...</option>
            <option value="Special Service">Special Service</option>
            <option value="One day Service">One day Service</option>
            <option value="Press Only">Press Only</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid paket.
          </div>
        </div>
        <div class="mb-3">
          <label for="statusField" class="form-label">Status</label>
          <select id="statusField" class="form-select" v-model="statusField" required>
            <option value="" selected disabled>Choose...</option>
            <option value="New">New</option>
            <option value="in Progress">In Progress</option>
            <option value="Finish">Finish</option>
          </select>
          <div class="invalid-feedback">
            Please provide the Order status
          </div>
        </div>
        <div class="mb-3">
          <label for="totalpriceField" class="form-label">Total Price</label>
          <input type="text" class="form-control" id="totalpriceField" v-model="totalpriceField" required>
          <div class="invalid-feedback">
            Please provide the Total Price.
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="paymentField" v-model="paymentField" required>
            <label class="form-check-label" for="paymentField">
              Bezahlt
              <div class="invalid-feedback">
                Please select if applied
              </div>
            </label>
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createBestellung">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BestellungCreateForm',
  data () {
    return {
      nameField: '',
      paketField: '',
      statusField: '',
      paymentField: false,
      totalpriceField: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    // async createBestellung () {
    //   if (this.validate()) {
    //     const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/bestellungs'
    //     const headers = new Headers()
    //     headers.append('Content-Type', 'application/json')
    //
    //     const data = JSON.stringify({
    //       name: this.nameField,
    //       paket: this.paketField,
    //       payment: this.paymentField,
    //       status: this.statusField,
    //       totalprice: this.totalpriceField
    //     })
    //     const requestOptions = {
    //       method: 'POST',
    //       headers: headers,
    //       body: data,
    //       redirect: 'follow'
    //     }
    //     const response = await fetch(endpoint, requestOptions)
    //     await this.handleResponse(response)
    //   }
    // },
    createBestellung () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/api/bestellungs'
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const data = JSON.stringify({
        name: this.nameField,
        paket: this.paketField,
        payment: this.paymentField,
        status: this.statusField,
        totalprice: this.totalpriceField
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: data,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('order-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>

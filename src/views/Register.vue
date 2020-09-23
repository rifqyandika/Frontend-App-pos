<template>
  <div class="p-5 mt-5">
    <center>
      <div class="card text-dark bg-light mb-3 shadow" style="max-width: 25rem;">
        <div class="card-header">
          <h3>Register</h3>
        </div>
        <form class="p-5" v-on:submit.prevent="getRegister">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              required="required"
              v-model="form.email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              required="required"
              v-model="form.password"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-success btn-block">Register</button>
            <router-link to="/login">login</router-link>
          </div>
        </form>
      </div>
    </center>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    getRegister () {
      this.register(this.form)
        .then((response) => {
          alert(response)
          if (response === 'User already exist') {
            window.location = '/register'
          } else {
            window.location = '/login'
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    ...mapActions({
      register: 'auth/register'
    })
  }
}
</script>

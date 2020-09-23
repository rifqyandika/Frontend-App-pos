<template>
  <div class="p-5 mt-5">
    <center>
      <div class="card text-dark bg-light mb-3 shadow" style="max-width: 25rem;">
        <div class="card-header">
          <h3>Login</h3>
        </div>
        <form class="p-5" v-on:submit.prevent="getLogin">
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
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
            <router-link to="/register">Register</router-link>
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
    getLogin () {
      this.actionLogin(this.form)
        .then((response) => {
          if (response === 'Login success') {
            window.location = '/'
          } else {
            window.location = '/login'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
  }
}
</script>

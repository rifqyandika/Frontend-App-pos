<template>
  <div>
    <div v-if="type=='product'">
      <nav class="navbar navbar-light bg-white pl-0 pr-0" style="box-shadow: 0 5px 5px -5px #333;">
      <div class="container-fluid">
         <Sidebar/>
        <span class="navbar-brand mb-0 h1">{{title}}</span>
        <Search/>
      </div>
    </nav>
    </div>
    <div v-else-if="type=='history'">
      <nav class="navbar navbar-light bg-white pl-0 pr-0" style="box-shadow: 0 5px 5px -5px #333;">
      <div class="container-fluid">
         <Sidebar/>
        <span class="navbar-brand mb-0 h1">{{title}}</span>
        <button @click="getLogout()" class="btn logout btn-danger">
          Logout
        </button>
      </div>
    </nav>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import { mapActions } from 'vuex'

export default {
  props: ['title', 'type'],
  components: {
    Search,
    Sidebar
  },
  methods: {
    getLogout () {
      this.logout()
        .then((response) => {
          alert('Thanks')
          window.location = '/login'
        }).catch((err) => {
          console.log(err)
        })
    },
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>
<style scoped>
button img {
  width: 1px;
}
.logout img {
  width: 50px;
  margin-left: -14px;
}
</style>

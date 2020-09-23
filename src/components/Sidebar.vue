<template>
  <div>
    <button class="btn" v-b-toggle.sidebar-backdrop>
      <img src="../assets/img/toggler.png" alt />
    </button>
    <b-sidebar id="sidebar-backdrop" title="Menu" backdrop shadow width="110px" bg-variant="white">
      <div class="px-4 py-3">
        <router-link to="/">
          <img src="../assets/img/menu1.png" alt class="mb-4" />
        </router-link>
        <br />
        <router-link to="/dashboard">
          <img src="../assets/img/menu2.png" class="mb-4" alt />
        </router-link>
        <b-button v-b-modal.modal-1 variant="link" class="btn-add">
          <img src="../assets/img/menu3.png" class="mb-4" alt />
        </b-button>
        <br />
      </div>
    </b-sidebar>
    <ModalAdd/>
  </div>
</template>
<script>
import ModalAdd from './ModalAdd'

export default {
  components: {
    ModalAdd
  }
}
</script>

<style scoped>
button img {
  width: 24px;
}
.btn-add img {
  width: 55px;
  margin-left: -11px;
}
</style>

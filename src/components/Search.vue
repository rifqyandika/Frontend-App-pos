<template>
  <div>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control"
        v-model="search"
        type="search"
        placeholder="Search"
        aria-label="Search"
        @keyup="productSearch(search)"
      />
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions({
      productSearch: 'product/searchProduct'
    })
  }
}
</script>

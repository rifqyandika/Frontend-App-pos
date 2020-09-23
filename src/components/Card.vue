<template>
  <div class="card shadow">
    <img :src="`http://54.160.81.6:3006/${productku.image}`" alt class="img-fluid" />
    <div class="card-title mb-0 p-2">
        <h5 class="mb-0">{{productku.name}}</h5>
        <h3>Rp. {{productku.price}}</h3>
        <button @click="addToCart(productku)" class="btn btn-info mr-1">Add</button>
        <router-link @click="getUpdate()" :to="`/detail/`+ productku.id_product" class="btn btn-primary mr-1">Edit</router-link>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['productku'],
  methods: {
    editProduct () {
      alert(this.productku.id_product)
    },
    ...mapActions({
      addToCart: 'product/addCart'
    })
  }
}
</script>

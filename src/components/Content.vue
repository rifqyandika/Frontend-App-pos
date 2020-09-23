<template>
  <div class="row no-gutters bg-light">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-6 mx-auto">
      <div class="row no-gutters pt-3">
        <div class="container-fluid">
          <div class="col-12 text-right">
            <button class="btn btn-primary mr-1" @click="getLast()">Terbaru</button>
            <button class="btn btn-info mr-1" @click="getPrice()">Termurah</button>
          </div>
        </div>
      </div>
      <div class="row p-1 mx-auto">
        <div
          class="col-6 col-lg-3 col-md-4 col-sm-6 col-xs-6 p-2"
          v-for="(item, index) in productku"
          :key="index"
        >
          <Card :productku="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Card from './Card'

export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters({
      productku: 'product/product'
    })
  },
  methods: {
    ...mapActions({
      productGet: 'product/getProduct',
      getLast: 'product/sortNew',
      getPrice: 'product/sortPrice'
    })
  },
  mounted () {
    this.productGet()
  }
}
</script>

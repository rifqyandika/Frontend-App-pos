<template>
  <div>
    <nav class="navbar navbar-light bg-white pl-0 pr-0" style="box-shadow: 0 5px 5px -5px #333;">
      <span class="navbar-text mx-auto d-flex">
        <span class="pr-1">{{caret}}</span>
        <div
          class="o text-center"
          style="height: 22px; width: 22px; border-radius: 100%; background-color: #57CAD5; color: white;"
        >
          <span>0</span>
        </div>
      </span>
    </nav>
    <div v-if="cart">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item,index) in cartKu" :key="index">
          <div class="media">
            <img
              width="90px"
              class="mr-3"
              :src="`http://54.160.81.6:3006/${item.image}`"
              alt
            />
            <div class="media-body">
              <p class="mt-0">{{item.name}}</p>
              <div class="border">
                <button class="btn btn-sm btn-danger">-</button>
                {{item.qty}}
                <button class="btn btn-sm btn-primary">+</button>
                <span class="float-right">Rp.{{item.price}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="is-item container text-center">
        <img src="../assets/img/cart.png" alt />
        <h6>Your cart is empty</h6>
        <p>Please add some items from the menu</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartD from '../mixin/mixin'

export default {
  mixins: [CartD],
  data () {
    return {
      cart: true
    }
  },
  computed: {
    ...mapGetters({
      cartKu: 'product/cartt'
    })
  }
}
</script>

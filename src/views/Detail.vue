<template>
  <div>
    <div class="home">
      <div class="row no-gutters">
        <div class="col-lg-9 col-md-12 col-sm-12">
          <Navbar title="Foods Items" type="product" />
          <div class="row p-5 no-gutters">
            <div class="col-md-12">
              <Detail/>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import Detail from '../components/Detail'

export default {
  components: {
    Navbar,
    Cart,
    Detail
  }
}
</script>

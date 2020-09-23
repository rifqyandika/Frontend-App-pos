<template>
  <div>
    <div class="home">
    <Navbar title="History" type="history"/>
      <div class="row no-gutters">
        <div class="col-lg-12 col-md-12 col-sm-12 mx-auto">
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Content from '../components/ContentDash'

export default {
  components: {
    Navbar,
    Content
  }
}
</script>

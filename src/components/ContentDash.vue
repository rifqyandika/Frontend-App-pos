<template>
  <div>
    <div class="container-fluid">
      <Status/>
      <Chart/>
    </div>
  </div>
</template>
<script>
import Status from './Status'
import Chart from './Chart'

export default {
  components: {
    Status,
    Chart
  }
}
</script>

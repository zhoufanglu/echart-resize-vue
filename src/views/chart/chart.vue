<template>
  <div class="p-chart">
    <h3>图表自适应测试</h3>
    <div class="first-row">
      <chart_a></chart_a>
    </div>
    <div class="second-row">
      <div class="left">
        <chart_b></chart_b>
      </div>
      <div class="right">
        <chart_c></chart_c>
      </div>
    </div>
  </div>
</template>
<script>
import chart_a from './components/chart_a'
import chart_b from './components/chart_b'
import chart_c from './components/chart_c'
export default {
  name: '',
  components: {
    chart_a,
    chart_b,
    chart_c
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.p-chart {
  display: flex;
  flex-direction: column;
  .first-row {
    border: solid 1px red;
    box-sizing: border-box;
    height: 300px;
    margin: 10px;
  }
  .second-row {
    display: flex;
    align-items: center;
    > div {
      box-sizing: border-box;
      border: solid 1px green;
      height: 300px;
      width: 50%;
      margin: 10px;
    }
  }
}
</style>

<template>
  <chartComponent chartId="chart_a" :option="option"></chartComponent>
</template>
<script>
import chartComponent from '../../../components/chartComponent'
export default {
  name: '',
  components: {
    chartComponent
  },
  data() {
    return {
      option: {}
    }
  },
  created() {},
  mounted() {
    this.option = {
      title: {
        text: 'chart_a',
        x: 'center'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (value) {
          console.log(33, value[0])
          return value.data + '个'
        }
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>

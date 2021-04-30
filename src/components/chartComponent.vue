<template>
  <div class="chart-box" :ref="chartId"></div>
</template>

<script>
import * as echarts from 'echarts'
import { mapState } from 'vuex'

export default {
  name: 'chartComponent',
  props: {
    chartId: { type: String, required: true },
    option: { type: Object, default: () => {} },
    loading: { type: Boolean, default: false }
  },
  data() {
    return {
      myChart: null,
      isFinished: false
    }
  },
  computed: {
    ...mapState({
      innerWH: (state) => state.window.innerWH
    })
  },
  methods: {
    drawChart() {
      this.myChart.setOption(this.option, true)
    }
  },
  mounted() {
    if (!this.myChart) {
      this.myChart = echarts.init(this.$refs[this.chartId])
    }
    this.drawChart()

    this.myChart.on('finished', () => {
      if (!this.isFinished) {
        console.log('finished')
        this.isFinished = true
        this.myChart.resize()
      }
    })
  },
  beforeDestroy() {
    if (this.myChart) this.myChart.dispose()
    this.myChart = null
  },
  watch: {
    //监听echarts的option
    option: {
      handler(newVal) {
        this.drawChart(newVal)
      },
      deep: true
    },
    //监听vuex内的窗口大小
    innerWH: {
      handler() {
        console.log('窗口resize')
        this.myChart.resize()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-box {
  width: 100% !important;
  height: 100% !important;
}
</style>

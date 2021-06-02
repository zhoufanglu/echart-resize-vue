<template>
  <div style="width: 100%; height: 100%; border: solid 1px red">
    <div v-show="loading">加载图表中...</div>
    <div v-show="!loading" class="chart-box" :ref="chartId"></div>
  </div>
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
      isFirstFinished: false
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
      if (this.loading) {
        //如果还是加载状态，关闭Loading
        this.$emit('closeLoading')
      }
      if (!this.isFirstFinished) {
        //只有在第一次的时候resize
        this.isFirstFinished = true
        setTimeout(() => {
          this.myChart.resize()
        })
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
        console.log('窗口resize', this.chartId)
        this.myChart.resize()
      },
      deep: true
    },
    loading(newVal) {
      console.log('loading状态', newVal)
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

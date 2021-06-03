<template>
  <div style="width: 100%; height: calc(100% - 23px)">
    <button @click="refresh">刷新图表3，模拟接口loading</button>
    <chartComponent
      :loading="loading"
      chartId="chart_c"
      :option="option"
      @closeLoading="closeLoading"
      ref="chartComponent"
    ></chartComponent>
  </div>
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
      option: {},
      loading: false,
      testCount: 0
    }
  },
  created() {},
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.testCount++
      //模拟接口，加个setTimeout
      //this.$refs.chartComponent.setLoading(true)
      this.loading = true
      setTimeout(() => {
        this.option = {
          title: {
            text: 'chart_c',
            x: 'center'
          },
          testCount: this.testCount,
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' }
              ]
            }
          ]
        }
      }, 1000)
    },
    closeLoading() {
      console.log(85, '关闭loading')
      this.loading = false
    },
    refresh() {
      this.initChart()
    }
  }
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>

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
    let data = {
      statusCode: 200,
      msg: '',
      pageCount: null,
      reqData: {
        dataList: [
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月上旬',
            ctnrQty: 2885
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202107',
            arrivalDeptStatus: '离港',
            monthType: '7月上旬',
            ctnrQty: 840
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月上旬',
            ctnrQty: 16803
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202107',
            arrivalDeptStatus: '离港',
            monthType: '7月上旬',
            ctnrQty: 8589
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202107',
            arrivalDeptStatus: '离港',
            monthType: '7月中旬',
            ctnrQty: 19664
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月中旬',
            ctnrQty: 55374
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202107',
            arrivalDeptStatus: '离港',
            monthType: '7月中旬',
            ctnrQty: 44866
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月中旬',
            ctnrQty: 8988
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202107',
            arrivalDeptStatus: '离港',
            monthType: '7月中旬',
            ctnrQty: 6310
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月中旬',
            ctnrQty: 33504
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月下旬',
            ctnrQty: 55560
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202107',
            arrivalDeptStatus: '离港',
            monthType: '7月下旬',
            ctnrQty: 41304
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202107',
            arrivalDeptStatus: '离港',
            monthType: '7月下旬',
            ctnrQty: 783
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月下旬',
            ctnrQty: 44128
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202107',
            arrivalDeptStatus: '到港',
            monthType: '7月下旬',
            ctnrQty: 381
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月上旬',
            ctnrQty: 4581
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月上旬',
            ctnrQty: 33399
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202108',
            arrivalDeptStatus: '离港',
            monthType: '8月上旬',
            ctnrQty: 1680
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202108',
            arrivalDeptStatus: '离港',
            monthType: '8月上旬',
            ctnrQty: 17178
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月中旬',
            ctnrQty: 87081
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202108',
            arrivalDeptStatus: '离港',
            monthType: '8月中旬',
            ctnrQty: 20548
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月中旬',
            ctnrQty: 9129
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202108',
            arrivalDeptStatus: '离港',
            monthType: '8月中旬',
            ctnrQty: 44886
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202108',
            arrivalDeptStatus: '离港',
            monthType: '8月中旬',
            ctnrQty: 8977
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月中旬',
            ctnrQty: 64722
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202108',
            arrivalDeptStatus: '离港',
            monthType: '8月下旬',
            ctnrQty: 82608
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月下旬',
            ctnrQty: 111120
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月下旬',
            ctnrQty: 88256
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202108',
            arrivalDeptStatus: '离港',
            monthType: '8月下旬',
            ctnrQty: 1566
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202108',
            arrivalDeptStatus: '到港',
            monthType: '8月下旬',
            ctnrQty: 762
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202110',
            arrivalDeptStatus: '到港',
            monthType: '10月上旬',
            ctnrQty: 1189
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202110',
            arrivalDeptStatus: '到港',
            monthType: '10月上旬',
            ctnrQty: 207
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202110',
            arrivalDeptStatus: '离港',
            monthType: '10月中旬',
            ctnrQty: 18780
          },
          {
            dchgDeptPlace: '洋山一期',
            staYearMonth: '202110',
            arrivalDeptStatus: '到港',
            monthType: '10月中旬',
            ctnrQty: 23667
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202110',
            arrivalDeptStatus: '离港',
            monthType: '10月中旬',
            ctnrQty: 44846
          },
          {
            dchgDeptPlace: '洋山三期',
            staYearMonth: '202110',
            arrivalDeptStatus: '到港',
            monthType: '10月中旬',
            ctnrQty: 8847
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202110',
            arrivalDeptStatus: '离港',
            monthType: '10月中旬',
            ctnrQty: 3643
          },
          {
            dchgDeptPlace: '洋山四期',
            staYearMonth: '202110',
            arrivalDeptStatus: '到港',
            monthType: '10月中旬',
            ctnrQty: 2286
          }
        ]
      }
    }
    let chartData = data.reqData.dataList
    console.log(294, chartData)
    //series 应是洋山一期，洋山三期， 洋山四期
    //找出每列显示的块名称
    let columnName = chartData.reduce((prev, cur) => {
      if (!prev.includes(cur.dchgDeptPlace)) {
        prev.push(cur.dchgDeptPlace)
      }
      return prev
    }, [])
    let arriveList = [],
      leaveList = []
    //颜色块列表
    const arriveColorList = ['#045299', '#0099ff', '#00ccff']
    const leaveColorList = ['#98a870', '#98bb70', '#8bcc66']
    //到港arriveList
    columnName.forEach((name, index) => {
      arriveList.push({
        name: name,
        //name: '到港',
        type: 'bar',
        color: arriveColorList[index % 3],
        stack: '到港', //折叠显示
        tooltipName: `到港${name}`,
        data: chartData
          .filter(
            (i) => i.arrivalDeptStatus === '到港' && i.dchgDeptPlace === name
          )
          .map((j) => {
            return {
              value: j.ctnrQty,
              type: '到港'
            }
          })
      })
    })
    console.log(313, arriveList)
    //离港leaveList
    columnName.forEach((name, index) => {
      leaveList.push({
        name: name,
        //name: '离港',
        stack: '离港', //折叠显示
        type: 'bar',
        color: leaveColorList[index % 3],
        data: chartData
          .filter(
            (i) => i.arrivalDeptStatus === '离港' && i.dchgDeptPlace === name
          )
          .map((j) => {
            return {
              value: j.ctnrQty,
              type: '离港'
            }
          })
      })
    })
    console.log(303, leaveList)
    const allList = [...arriveList, ...leaveList]
    console.log(444, allList)

    //找出每列显示的块名称,x轴时间
    let dateList = chartData.reduce((prev, cur) => {
      if (!prev.includes(cur.monthType)) {
        prev.push(cur.monthType)
      }
      return prev
    }, [])
    console.log(335, dateList)
    this.option = {
      title: {
        text: '资源总览',
        left: '20px',
        textStyle: {
          color: '#436EEE',
          fontSize: 17
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          //console.log(369, params)
          let tipStr = ''
          params.forEach((i) => {
            tipStr += `<div style='text-align: left'>${i.seriesName}-${i.data.type}:${i.data.value}</div>`
          })
          return tipStr
        }
      },
      legend: {
        itemWidth: 15,
        itemHeight: 15,
        data: columnName /*['到港', '离港']*/
      },
      xAxis: {
        data: dateList,
        splitLine: {
          show: false
        }
      },
      yAxis: {
        splitLine: {
          show: false
        }
      },
      //series: [...arriveList, ...leaveList]
      series: arriveList
      /*[
        {
          name: '可用',
          type: 'bar',
          stack: '使用情况',
          data: [5, 20, 36, 10, 10, 20],
          itemStyle: {
            normal: { color: '#FF8849' }
          }
        },
        {
          name: '不可用',
          type: 'bar',
          stack: '使用情况',
          data: [40, 22, 18, 35, 42, 40],
          itemStyle: {
            normal: { color: '#3FBB49' }
          }
        }
      ]*/
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>

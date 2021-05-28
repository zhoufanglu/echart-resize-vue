import { throttle } from './tool'

//vuex对象
import store from '@/store/index'

const windowFn = throttle(
  function () {
    console.log('------触发窗口大小变化事件-----')
    let innerWH = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    }
    store.dispatch('setInnerWH', innerWH)
  },
  1000,
  { leading: false }
)

//全局监听窗口大小变化事件
window.addEventListener('resize', windowFn)

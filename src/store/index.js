import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import window from './module/window'

export default new Vuex.Store({
  modules: { window }
})

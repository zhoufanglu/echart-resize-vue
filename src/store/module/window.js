const window = {
  state: {
    //页面的宽高
    innerWH: {}
  },

  mutations: {
    SET_INNER_WH(state, val) {
      //state.innerWH = { ...Object.assign(state.innerWH, val) }
      state.innerWH = val
    }
  },

  actions: {
    setInnerWH({ commit }, val) {
      commit('SET_INNER_WH', val)
    }
  }
}

export default window

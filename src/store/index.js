import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0,
      popup: false,
      popupIndex: null
    }
  },
  mutations: {
    upPopup(state) {
      state.popup = !state.popup
    },
    indexToPopup(state, data){
      state.popupIndex = data
    }
  }
})

export default store
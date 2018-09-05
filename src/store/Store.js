import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    myname:'QIQIQIQI',
    pagewx:false,
    transitionName:'',
    nullscroll:true,
  },
  actions:{

  },
  mutations:{
    getPageShow:function (state,payload) {
      state.transitionName = payload
    },
    getPageScroll:function (state,payload) {
      state.nullscroll = payload
    }
  }
})

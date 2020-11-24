import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './user'
import { mutations } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    user: user,
    errors: [],
    icon_render: true,
    theme_app: 'default',
    layout_render: 'layout-default',
    home_app: false
  },
  mutations: mutations
})

import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'
import Home from './Home.vue'
import { Carousel, CarouselItem } from 'element-ui'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Carousel)
localVue.use(CarouselItem)

let store = new Vuex.Store({
  state: {
    theme_app: 'default'
  }
})

const wrapper = shallowMount(Home, { store, localVue })

describe('Home', () => {
  it('is Home a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

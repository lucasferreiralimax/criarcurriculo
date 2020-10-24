import { shallowMount, createLocalVue } from '@vue/test-utils'

import About from './About.vue'
import { Carousel, CarouselItem } from 'element-ui'

const localVue = createLocalVue()

localVue.use(Carousel)
localVue.use(CarouselItem)

const wrapper = shallowMount(About, {
  localVue
})

describe('About', () => {
  it('is About a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})

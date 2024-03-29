import { shallowMount, createLocalVue } from '@vue/test-utils'

import About from './About.vue'
import { Carousel, CarouselItem } from 'element-ui'

const localVue = createLocalVue()

const wrapper = shallowMount(About, {
  localVue
})

describe('About', () => {
  it('is About a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('is About with Carousel component', () => {
    expect(wrapper.findComponent(Carousel).exists()).toBeTruthy()
  })
  it('is About with Carousel component itens', () => {
    expect(wrapper.findComponent(CarouselItem).exists()).toBeTruthy()
  })
  wrapper.findAll('a').wrappers.forEach((wrapper, index) => {
    it(`link to Github ${index}`, () => {
      expect(wrapper.attributes('href')).toBe('https://github.com/lucasferreiralimax/criarcurriculo')
    })
  })
  wrapper.findAll('.countrys li').wrappers.forEach((wrapper, index) => {
    it(`Country ${index}`, () => {
      expect(wrapper.get('img').exists()).toBeTruthy()
    })
  })
})

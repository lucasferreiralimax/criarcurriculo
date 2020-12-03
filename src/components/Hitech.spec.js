import { shallowMount } from '@vue/test-utils'

import Hitech from './Hitech.vue'

const wrapper = shallowMount(Hitech)

const credits_logo_array = wrapper.findAll('.hitech a.credits_logo p'),
      credits_logo = [ 'Javascript', 'HTML5', 'CSS3' , 'Vue.js', 'Element', 'Firebase', 'Pug.js', 'Stylus.js', 'Github', 'Git', 'Google', 'Heroku', 'Babel.js', 'Node.js', 'Cypress', 'Firefox', 'view.about.work' ]

describe('Hitech', () => {
  it('is Hitech a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  credits_logo_array.wrappers.forEach((wrapper, index) => {
    it(`Hitech text logo ${credits_logo[index]}`, () => {
      expect(wrapper.text()).toContain(credits_logo[index])
    })
  })
})

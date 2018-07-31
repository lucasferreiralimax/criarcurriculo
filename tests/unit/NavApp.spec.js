import { shallowMount } from '@vue/test-utils'
import NavApp from '@/components/NavApp.vue'

describe('NavApp.vue', () => {
  it('renders NavApp when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(NavApp)
    const vm = wrapper.vm
    console.log(wrapper)
  })
})

import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders Criar Currículo when passed', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.text()).toMatch('Criar Currículo')
  })
})

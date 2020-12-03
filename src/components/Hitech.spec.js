import { shallowMount } from '@vue/test-utils'

import Hitech from './Hitech.vue'

const wrapper = shallowMount(Hitech)

const credits_logo = [
  { name: 'Javascript'      },
  { name: 'HTML5',          },
  { name: 'CSS3'            },
  { name: 'Vue.js'          },
  { name: 'Element'         },
  { name: 'Firebase'        },
  { name: 'Pug.js'          },
  { name: 'Stylus.js'       },
  { name: 'Github'          },
  { name: 'Git'             },
  { name: 'Google'          },
  { name: 'Heroku'          },
  { name: 'Babel.js'        },
  { name: 'Node.js'         },
  { name: 'Cypress'         },
  { name: 'Firefox'         },
  { name: 'view.about.work' }
], credits_logo_array = wrapper.findAll('.hitech a.credits_logo p')

describe('Hitech', () => {
  it('is Hitech a vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  credits_logo_array.wrappers.forEach((wrapper, index) => {
    it(`Hitech text logo ${credits_logo[index].name}`, () => {
      expect(wrapper.text()).toContain(credits_logo[index].name)
    })
  })
})

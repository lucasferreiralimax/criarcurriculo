import { config } from '@vue/test-utils';
import Vue from 'vue'
import { enableFetchMocks } from 'jest-fetch-mock'
import { DatePicker, Tag, Input, Button, Carousel, Select, Option, CarouselItem, Switch } from 'element-ui'
import VueTheMask from 'vue-the-mask'
import draggable from 'vuedraggable'

config.mocks.$t = key => key;
config.mocks.$tc = key => key;

Vue.component(DatePicker.name, DatePicker)
Vue.component(draggable.name, draggable)
Vue.use(Tag)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Switch)
Vue.use(VueTheMask)

enableFetchMocks()

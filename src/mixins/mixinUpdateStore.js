import { mapState } from 'vuex'
import moment from 'moment'

export const mixinUpdateStore = {
  computed: mapState({
    user: state => state.user,
    accounts: state => state.accounts
  }),
  methods: {
    accountsRender () {
      let local = localStorage
      this.$store.commit("updateAcccount", [])

      for(let obj in local) {
        if(/store/.test(obj)) {
          let store = JSON.parse(local[obj])
          if(store.name) {
            let lang = obj.match(/\w{2}-\w{2}/ig),
                store_account = {
                  "s_name": store.name,
                  "s_local": obj,
                  "s_data": store,
                  "s_time": moment().locale(lang[0]).format('LLL'),
                  "s_lang": lang[0],
                  "s_active": lang[0] == localStorage.getItem('locale')
                };
            this.$store.commit("insertAcccount", store_account)
          }
        }
      }
    },
    updateStore () {
      window.localStorage.setItem(`store_${document.documentElement.lang}`, JSON.stringify(this.user))
      this.accountsRender()
    },
    updateVuex (name, e, id) {
      switch (name) {
        case 'updateCep':
          this.$store.commit(name, e.target.value.replace(/\D+/g, ''))
          break
        case 'updateTravel':
          this.$store.commit(name, e)
          break
        case 'updateGenero':
          this.$store.commit(name, e)
          this.$store.commit('updateMaritalStatus', '')
          break
        case 'updateHobbies':
          this.$store.commit(name, e)
          break
        case 'updateTelephone':
          this.$store.commit(name, this.user.telephones)
          break
        case 'updateEmail':
          this.$store.commit(name, this.user.emails)
          break
        case 'updateSite':
          this.$store.commit(name, this.user.sites)
          break
        case 'updateExpCheck':
        case 'updateCourserCheck':
          this.$store.commit(name, { id: id, value: e.target.checked })
          break
        case 'updateExp':
        case 'updateCourser':
          this.$store.commit(name, { id: id, value: e })
          break
        default:
          this.$store.commit(name, e.target.value)
          break
      }
      this.updateStore()
    },
    newInput (value, vuex) {
      this.user[value].push(null)
      this.$store.commit(vuex, this.user[value])
    },
    newComponent (value) {
      if(value == 'exps') {
        this.user[value].push({ experience: { name: '', work: '', data_start: '', data_end: '', about: '', now: false } })
      } else {
        this.user[value].push({ formation: { name: '', school: '', data_start: '', data_end: '', about: '', now: false } })
      }
    },
    remove (value, key) {
      this.$delete(this.user[value], key)
      this.updateStore()
    },
    removeImage () {
      this.$store.commit('updatePhoto', '')
      document.querySelector('#GET-photo').value = ''
      this.updateStore()
    },
    setLocalStore (val) {
      let store = localStorage.getItem(`store_${val ? val : document.documentElement.lang}`)

      if(store) {
        // Store Update
        store = JSON.parse(store)
        this.$store.commit("updateUser", store)
      }
    }
  }
}

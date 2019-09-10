import { mapState } from 'vuex'

export const mixin = {
  computed: mapState({ user: state => state.user }),
  methods: {
    updateStore () {
      window.localStorage.setItem('store', JSON.stringify(this.user))
    },
    updateVuex (name, e, id) {
      switch (name) {
        case 'updateCep':
          e.target.value.length == 8 ? this.$store.commit(name, e.target.value) : ''
          break
        case 'updateTravel':
          this.$store.commit(name, e)
          break
        case 'updateCountryStatus':
          this.$store.commit(name, e.target.value)
          break
        case 'updateMaritalStatus':
          this.$store.commit(name, e.target.value)
          break
        case 'updateGenero':
          this.$store.commit(name, e.target.value)
          this.$store.commit('updateMaritalStatus', '')
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
          this.$store.commit(name, { id: id, value: e.target.checked })
          break
        case 'updateCourserCheck':
          this.$store.commit(name, { id: id, value: e.target.checked })
          break
        default:
          this.$store.commit(name, e.target.value)
          break
      }
      this.updateStore()
    }
  }
}

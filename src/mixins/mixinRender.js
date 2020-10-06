import { mapState } from 'vuex'
import { user } from '../user'

export const mixinRender = {
  computed: mapState({
    user: state => state.user,
    errors: state => state.errors
  }),
  methods: {
    errorsCheck () {
      this.$store.commit('updateErrors', [])
      if (!this.user.age) {
        this.errors.push(this.$t('form.errors.age'))
      }
      if (this.user.age && this.user.age < 14) {
        this.errors.push(this.$t('form.errors.age-min'))
      }
      if (!this.user.end.localidade) { this.errors.push(this.$t('form.errors.city')) }
      if (!this.user.end.logradouro) { this.errors.push(this.$t('form.errors.end')) }
      if (!this.user.genero) {this.errors.push(this.$t('form.errors.genre')) }
      if (!this.user.maritalstatus) { this.errors.push(this.$t('form.errors.maritals')) }
      if (!this.user.name) { this.errors.push(this.$t('form.errors.name')) }
      if (this.user.telephones.length) {
        for(let i = 0; this.user.telephones.length > i; i++) {
          if (!this.user.telephones[i]) { this.errors.push(this.$t('form.errors.phone')) }
        }
      }
      if (this.user.emails.length) {
        for(let i = 0; this.user.emails.length > i; i++) {
          if (!this.user.emails[i]) { this.errors.push(this.$t('form.errors.email')) }
        }
      }
      if (this.user.sites.length) {
        for(let i = 0; this.user.sites.length > i; i++) {
          if (!this.user.sites[i]) { this.errors.push(this.$t('form.errors.site')) }
        }
      }
      if (this.user.exps.length) {
        for(let i = 0; this.user.exps.length > i; i++) {
          if (!this.user.exps[i].experience.name) { this.errors.push(this.$t('form.errors.company')) }
          if (!this.user.exps[i].experience.work) { this.errors.push(this.$t('form.errors.office')) }
        }
      }
      if (this.user.coursers.length) {
        for(let i = 0; this.user.coursers.length > i; i++) {
          if (!this.user.coursers[i].formation.name) { this.errors.push(this.$t('form.errors.course')) }
          if (!this.user.coursers[i].formation.school) { this.errors.push(this.$t('form.errors.school')) }
        }
      }
      this.$store.commit('updateErrors', this.errors)
      return this.errors
    },
    printRender () {
      if(!this.errorsCheck().length) {
        let scroll_end = (document.querySelector('#app').clientHeight - document.querySelector('#app').parentElement.offsetHeight)
        window.print()
        window.scrollTo(0, scroll_end)
      } else {
        window.scrollTo(0, 600)
      }
    },
    resetForm () {
      if(window.confirm(this.$t('form.choice'))) {
        this.$store.commit('updateUser', user)
        this.$store.commit('updateErrors', [])
        this.updateStore()
      }
    }
  }
}

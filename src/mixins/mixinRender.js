import { mapState } from 'vuex'
import { user } from '../user'

export const mixinRender = {
  computed: mapState({
    user: state => state.user,
    errors: state => state.errors
  }),
  methods: {
    printRender () {
      this.$store.commit('updateErrors', [])
      if (!this.user.age) { this.errors.push('Precisa preencher o campo data de nascimento.') }
      if (!this.user.end.localidade) { this.errors.push('Precisa preencher o campo localidade.') }
      if (!this.user.end.logradouro) { this.errors.push('Precisa preencher o campo logradouro.') }
      if (!this.user.genero) {this.errors.push('Precisa colocar seu genero.') }
      if (!this.user.maritalstatus) { this.errors.push('Precisa colocar seu estado civil.') }
      if (!this.user.name) { this.errors.push('Precisa preencher o campo nome.') }
      if (this.user.telephones.length) {
        for(let i = 0; this.user.telephones.length > i; i++) {
          if (!this.user.telephones[i]) { this.errors.push('Precisa preencher o campo de telefone') }
        }
      }
      if (this.user.emails.length) {
        for(let i = 0; this.user.emails.length > i; i++) {
          if (!this.user.emails[i]) { this.errors.push('Precisa preencher o campo de e-mail') }
        }
      }
      if (this.user.sites.length) {
        for(let i = 0; this.user.sites.length > i; i++) {
          if (!this.user.sites[i]) { this.errors.push('Precisa preencher o campo de sites') }
        }
      }
      if (this.user.exps.length) {
        for(let i = 0; this.user.exps.length > i; i++) {
          if (!this.user.exps[i].experience.name) { this.errors.push('Precisa preencher o campo nome da empresa') }
          if (!this.user.exps[i].experience.work) { this.errors.push('Precisa preencher o campo nome do cargo') }
        }
      }
      if (this.user.coursers.length) {
        for(let i = 0; this.user.coursers.length > i; i++) {
          if (!this.user.coursers[i].formation.name) { this.errors.push('Precisa preencher o campo nome da instituição') }
          if (!this.user.coursers[i].formation.school) { this.errors.push('Precisa preencher o campo nome do curso') }
        }
      }
      if(!this.errors.length) {
        let scroll_end = (document.querySelector('#app').clientHeight - document.querySelector('#app').parentElement.offsetHeight)
        window.print()
        window.scrollTo(0, scroll_end)
      } else {
        window.scrollTo(0, 600)
      }
      this.$store.commit('updateErrors', this.errors)
    },
    resetForm () {
      if(window.confirm("Tem certeza?")) {
        this.$store.commit('updateUser', user)
        this.$store.commit('updateErrors', [])
        this.updateStore()
      }
    }
  }
}

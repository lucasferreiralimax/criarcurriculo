export const mixinTranslateDate = {
  methods: {
    translateDate (date) {
      if (!date) return ''

      let value = new Date(date),
          month = value.getMonth(),
          year = value.getFullYear()

      switch (++month) {
        case 1:
          month = this.$t('calendar.january')
          break
        case 2:
          month = this.$t('calendar.february')
          break
        case 3:
          month = this.$t('calendar.march')
          break
        case 4:
          month = this.$t('calendar.april')
          break
        case 5:
          month = this.$t('calendar.may')
          break
        case 6:
          month = this.$t('calendar.june')
          break
        case 7:
          month = this.$t('calendar.july')
          break
        case 8:
          month = this.$t('calendar.august')
          break
        case 9:
          month = this.$t('calendar.september')
          break
        case 10:
          month = this.$t('calendar.october')
          break
        case 11:
          month = this.$t('calendar.november')
          break
        case 12:
          month = this.$t('calendar.december')
          break
      }

      return `${month} ${this.$t('calendar.in')} ${year}`
    }
  }
}

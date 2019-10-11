var path = require('path');

module.exports = {
  pwa: {
    name: 'Curriculo Grátis',
    themeColor: '#4A4A4A'
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, "src/stylus/config/_variables"),
          path.resolve(__dirname, "src/stylus/mixins/_responsive")
        ]
      }
    }
  },
  productionSourceMap: false
}

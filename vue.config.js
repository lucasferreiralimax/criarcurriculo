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
  chainWebpack: (config) => {
    /* 
       Disable (or customize) prefetch, see:
       https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch
    */
    config.plugins.delete('prefetch')
    /* 
       Configure preload to load all chunks
       NOTE: use `allChunks` instead of `all` (deprecated)
    */
    config.plugin('preload').tap((options) => {
      options[0].include = 'allChunks'
      return options
    })
  },
  productionSourceMap: false
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ https://github.com/FurioColombo/zenythPolisint/" : "/",
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: () => true
        }
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
  }
};
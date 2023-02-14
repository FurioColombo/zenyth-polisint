/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/zenyth-polisint/'
      : '/',
  outputDir: path.resolve(__dirname, "dist"),
  transpileDependencies: true,

}

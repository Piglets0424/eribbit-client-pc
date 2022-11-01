const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
});

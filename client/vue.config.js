module.exports = {
  devServer: {
    port: ProcessingInstruction.env.PORT || 8080
  },
  transpileDependencies: [
    'vuetify'
  ]
}

const {createProxyMiddleware} = require('http-proxy-middleware')

// const cors = require('cors')

// Project.use(cors())

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://test.api.boxigo.in/sample-data/',
      changeOrigin: true,
    }),
  )
}

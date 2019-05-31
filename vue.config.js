require('dotenv').config();

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/emoji-manager/'
    : '/',
  devServer: {
      host: "0.0.0.0",
      disableHostCheck: true,
      proxy: {
        '^/api': {
            target: process.env.API_TARGET,
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/'
            },
        },
     },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/emoji-manager/'
    : '/'
}
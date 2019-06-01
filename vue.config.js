require('dotenv').config();

module.exports = {
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
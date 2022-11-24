module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-genshin-impact', {
    // useNewUriParser: true, // 2021.7.14号发布的MongoDB 4.0中，官方发布不再使用 useNewUrlParser
  })
}
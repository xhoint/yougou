import request from './utils/request.js'
//app.js
App({
  // 公共页面加载时所用方法
  onLaunch: function() {
    // 添加基准路径
    request.defaults.baseURL = "https://api-hmugo-web.itheima.net/api/public/v1"
  }
})
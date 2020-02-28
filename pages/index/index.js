import request from '../../utils/request.js'

//index.js
//获取应用实例

Page({
  data: {
    // 轮播图数据
    banners: [],
  },
  // 当前页面加载时的所有的方法
  onLoad() {
    // 请求轮播图接口
    request({
      url: "/home/swiperdata"
    }).then(res => {
      // message是轮播图的数组
      const {
        message
      } = res.data;
      // 赋值给banners
      this.setData({
        banners: message
      })
    })
  }
})
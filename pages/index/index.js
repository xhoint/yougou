import request from '../../utils/request.js'

//index.js
//获取应用实例

Page({
  data: {
    // 轮播图数据
    banners: [],
    // 导航菜单数据
    menus: [],
    // 楼层数据
    floor: [],
    // 是否显示回到顶部
    isShowTop: false
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

    // 请求导航菜单
    request({
      url: "/home/catitems"
    }).then(res => {
      console.log(res)
      const {
        message
      } = res.data
      // 创建一个新数组存储赋值
      const newData = message.map(v => {
        // 判断当前的是否是分类
        if (v === "分类") {
          v.url = "pages/category/index"
        }
        return v

      })


      // 赋值给menus
      this.setData({
        menus: message
      })
    })

    // 请求楼层数据
    request({
      url: "/home/floordata"
    }).then(res => {
      console.log(res)
      const {
        message
      } = res.data
      // 赋值
      this.setData({
        floor: message
      })

    })
  },
  // 点击返回顶部
  handleTop() {
    // 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },
  // 监听顶部事件
  onPageScroll(e) {
    console.log(e)
    const {
      scrollTop
    } = e;
    // 当前的状态
    let isShow = this.data.isShowTop;

    // 判断如果滚动高度大于100，显示回到顶部的按钮
    if (scrollTop > 100) {
      isShow = true
    } else {
      isShow = false
    }

    // 避免频繁的操作setData，所以如果下面两个值是相同就没必要再赋值了
    if (isShow == this.data.isShowTop) return;

    this.setData({
      isShowTop: isShow
    })
  }
})
// 导入
import request from '../../utils/request.js'

// pages/categories/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0, //当前点击的索引
        categoryList: [] //分类数组
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 请求分页数据
        request({
            url: "/categories"
        }).then(res => {
            console.log(res)
            const {
                message
            } = res.data
            this.setData({
                categoryList: message
            })
        })

    },
    handleClick(e) {
        // index参数
        const {
            index
        } = e.currentTarget.dataset;

        // 保存当前点击的索引到data
        this.setData({
            current: index
        })
    },



    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
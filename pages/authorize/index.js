// pages/authorize/index.js

import request from '../../utils/request.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    handleUserInfo(e) {
        console.log(e)
        // 通过按钮授权成功后获取到的参数
        const {
            encryptedData,
            iv,
            rawData,
            signature
        } = e.detail;

        // 通过wx.login获取到code
        wx.login({
            success(res) {
                if (res.code) {
                    // 获取token需要的5个参数
                    const data = {
                        encryptedData,
                        iv,
                        rawData,
                        signature,
                        code: res.code
                    }

                    // 请求接口获取token
                    request({
                        url: "/users/wxlogin",
                        data,
                        method: "POST"
                    }).then(res => {
                        console.log(res)
                    })

                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    }



})
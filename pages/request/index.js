import request from "../../utils/request.js";

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    onLoad(){

        // 假设是ajax
        // $.ajax({
        //     url: "https://api.github.com/users",
        //     type: "get",
        //     data: {},
        //     // 成功的回调
        //     success(){},
        //     // 失败的回调函数
        //     fail(){},
        //     // 不管成功或者失败都会触发的方法
        //     complete(){}
        // })

        // 小程序异步请求的方法
        // 跟axios对比不好的地方：1.没有基准路径的配置  2.没有错误拦截器
        // wx.request({
        //     url: "http://157.122.54.189:9095/scenics/banners",
        //     method: "GET",
        //     success(res) { 
        //         console.log(res);
        //     },
        //     fail(){

        //     }
        // })

        // 2.测试基准路径
        request.defaults.baseURL = "http://157.122.54.189:9095";


        // 3.测试错误错误拦截
        request.onError(res => {
            // 错误的拦截
            if(res.statusCode == 404){
                console.log("出错了")
            }
        })

        // 1.测试返回promise
        // 调用自己封装的方法
        request({
            url: "/scenics/banners"
        }).then((res) => {
            console.log("测试request的请求：", res)
        })

        // 2.测试基准路径，带http的
        // 调用自己封装的方法
        request({
            url: "https://api.github.com/users"
        }).then((res) => {
            console.log("测试request的请求：", res)
        })

    }
})
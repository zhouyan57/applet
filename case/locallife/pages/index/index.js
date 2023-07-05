// index.js
Page({
  data:{
    swiperList: [],
    itemList: []
  },
  // 打开页面会执行生命周期函数 onLoad (相当于 vue 中的 created)
  onLoad() {
    wx.showLoading({
      title: '加载中...',
    })
    // 发送请求得到轮播图数据
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides',
      success: res => {
        this.setData({
          swiperList: res.data
        })
      },
      complete:() => {
        wx.hideLoading()
      }
    })
    // 得到九宫格数据
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories',
      success: res => {
        this.setData({
          itemList: res.data
        })
      }
    })
  }
})

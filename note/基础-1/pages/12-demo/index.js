// pages/12-demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      '/imgs/1.jpg',
      '/imgs/2.jpg',
      '/imgs/3.jpg',
    ],
    index: 0
  },
  // 下一张
  next() {
    this.setData({
      index: this.data.index + 1 >= this.data.imgArr.length ? 0 : this.data.index + 1
    })
  },
  // 上一张
  prev() {
    this.setData({
      index: this.data.index - 1 < 0 ? this.data.imgArr.length - 1 : this.data.index - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
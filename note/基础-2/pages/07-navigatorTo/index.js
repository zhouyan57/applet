// pages/07-navigatorTo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 跳转到 05 页面
  to05 () {
    // navigateTo 属于小程序的内置 API
    // 所有小程序内置的 API 都需要通过 wx 点出来
    wx.navigateTo({
      url: '/pages/05-swiper/index?name=yjj&age=20'
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
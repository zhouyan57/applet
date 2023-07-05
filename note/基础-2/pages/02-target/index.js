// pages/02-target/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  fn (e) {
    console.log('fn')
    // target：指的是事件源所在的 dom 
    // currentTarget：始终表示注册事件所有的 dom 元素
    console.log(e) 
    //父：target.dataset.name  f  currentTarget.dataset.name f
    //子：target.dataset.name  s  currentTarget.dataset.name f
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
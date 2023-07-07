// pages/01-lifecircle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载（当页面加载时会执行）
   * 可获取外界传入的数据
   */
  onLoad(options) {
    console.log('page - onLoad')
  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示时会执行（每次显示都会执行）
   */
  onShow() {
    console.log('page - onShow')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 页面初次渲染完成时会执行（只会执行一次）
   */
  onReady() {
    console.log('page - onReady')
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 页面进入到后台时会执行
   */
  onHide() {
    console.log('page - onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   * 页面销毁的时候会执行（切换到tabBar时页面会销毁）
   */
  onUnload() {
    console.log('page - onUnload')
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
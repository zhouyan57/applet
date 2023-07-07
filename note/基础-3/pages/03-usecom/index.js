// pages/03-usecom/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 11
  },
  // 获取组件实例
  getCom () {
    const com = this.selectComponent('#mycom')
    console.log('使用属性:' + com.data.msg)
    com.sayHi()
  },
  getval (e) {
    // 接收子组件传入的方法
    console.log(e.detail)
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
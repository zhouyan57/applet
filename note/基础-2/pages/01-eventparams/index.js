// pages/01-eventparams/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
        id: 1,
        name: '沸羊羊'
      },
      {
        id: 2,
        name: '双面龟'
      },
      {
        id: 3,
        name: '汤姆猫'
      }
    ]
  },
  mytap(e) {
    console.log('mytap')
    console.log(e.currentTarget.dataset.name)
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
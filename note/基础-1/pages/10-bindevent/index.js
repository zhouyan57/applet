// pages/10-bindevent/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1
  },
  tap1() {
    console.log('想不到吧，我就是惊喜')
  },
  addOne() {
    // 1.0 在小程序的方法中，如果要获取 data 中的数据，需要通过 this.data.xx 
    // 2.0 在小程序中，如果 data 中的数据修改之后还要保留响应式状态，需要通过 this.setData 方法来进行修改
    console.log('addOne')
    this.setData({
      num: this.data.num + 1
    })
    console.log(this.data.num)
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
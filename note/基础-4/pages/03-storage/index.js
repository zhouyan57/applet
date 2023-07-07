Page({
  // 向小程序本地存储数据
  setStorage(){
    wx.setStorageSync('token', 'asdasudhui')
    wx.setStorageSync('pet', {
      name:'Yoyo',
      age:1.5
    })
  },
  // 从本地取出数据
  getStorage(){
    const pet = wx.getStorageSync('pet')
    console.log(pet);
  },
  // 删除本地数据
  removeStorage(){
    wx.removeStorageSync('pet')
  },
  // 清空本地数据
  clearStorage(){
    wx.clearStorageSync()
  }
})
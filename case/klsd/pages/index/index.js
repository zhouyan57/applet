// index.js
import heroList from '../../data/heroList'
Page({
  data:{
    heroList: heroList
  },
  toDetail(e){
    let {heroname, icon, skill} = e.currentTarget.dataset
    // 跳转到详情页面
    wx.navigateTo({
      url: `/pages/detail/index?heroname=${heroname}&icon=${icon}&skill=${skill}`
    })
  }
})

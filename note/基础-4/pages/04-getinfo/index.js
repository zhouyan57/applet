Page({
  data:{
    profile:{
      avatarUrl:'https://img1.baidu.com/it/u=4267384015,939236732&fm=253&fmt=auto&app=138&f=JPEG?w=575&h=500'
    }
  },
  // 获取微信的头像
  chooseavatar(ev){
    console.log(ev.detail.avatarUrl);
    this.setData({
      'profile.avatarUrl':ev.detail.avatarUrl
    })
  }
})
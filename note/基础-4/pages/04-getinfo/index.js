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
    // 如果是从相册中选择的话，我们一种会将这个图片上传到服务器
    // 接收返回的图片地址，再将图片渲染到页面上
    // 上传临时文件
    wx.uploadFile({
      url: 'http://ajax-api.itheima.net/api/file',
      filePath: ev.detail.avatarUrl,
      name: 'avatar',
      success: (res) => {
        console.log(res);
      },
    });
  }
})
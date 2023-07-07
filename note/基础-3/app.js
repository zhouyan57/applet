// app.js
App({
  /**
   * 应用生命周期：当小程序初始化完成时，会执行
   */
  onLaunch (params) {
    console.log('app - onLaunch')
    console.log(params.scene)
  },
  /**
   * 应用生命周期：当小程序启动或从后台进入前台时，会执行
   */
  onShow (params) {
    console.log('app - onShow')
    console.log(params.scene)
  },
  /**
   * 应用生命周期：当小程序从前台进入到后台时，会执行
   */
  onHide () {
    console.log('app - onHide')
  }
})

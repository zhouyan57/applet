Page({
  getYMZ(){
    const pages = getCurrentPages()
    // 得到页面栈中最后一个页面的路由
    const route = pages[pages.length - 1].route
    console.log(route);
  },
  onLoad() {
    // 打开页面时，得到页面栈中的内容
    this.getYMZ()
  }
})
// components/06-life/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    r: 0,
    g: 0,
    b: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 需求：
  //  页面隐藏时，在组件中输出，隐藏
  //  页面显示时，在组件中输出，显示
  pageLifetimes: {
    // 当页面显示时，会执行
    show() {
      console.log('com - show')
      this.setData({
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
      })
    },
    // 当页面隐藏时，会执行
    hide() {
      console.log('com - hide')
    }
  }
})
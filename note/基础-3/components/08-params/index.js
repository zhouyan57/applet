// components/08-params/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: 'son'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sayHi () {
      console.log('你好啊，我是子组件')
    },
    passv () {
      // 向页面传参
      this.triggerEvent('getval', 'xjj')
    }
  }
})

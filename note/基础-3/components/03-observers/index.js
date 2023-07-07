// components/03-observers/index.js
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
    msg: 'xjj'
  },
  // 需求：一旦 msg 改变，就得到改变后的值
  observers: {
    'msg': function (newMsg) {
      console.log('msg 改变了：' + newMsg)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
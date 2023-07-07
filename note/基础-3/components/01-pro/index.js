// components/01-pro/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: String,
    num: {
      type: Number
    },
    info: String
  },

  /**
   * 组件的初始数据：定义组件中的数据
   */
  data: {
    name: 'xjj',
    age: 18
  },
  /**
   * 组件的方法列表
   */
  methods: {
    ageAdd() {
      this.setData({
        age: this.data.age + 1
      })
    },
  }
})
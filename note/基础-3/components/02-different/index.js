// components/02-different/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: 'xjj'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getName () {
      // 得到 name
      console.log(this.data.name)
    },
    getInfo () {
      // 得到 info
      // console.log(this.properties.info)
      console.log(this.data.info)
      // 在组件中 data 与 properties 虽然是两个属性，但是它的内存地址完全一样
      console.log(this.data === this.properties)
    }
  }
})

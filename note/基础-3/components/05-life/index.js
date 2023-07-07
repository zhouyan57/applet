// components/05-life/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 专门管理小程序组件的生命周期的
  lifetimes: {
    /**
     * 组件生命周期：组件实例刚被创建好的时候执行
     */
    created () {
      console.log('com - created')
    },
    /**
     * 组件生命周期：组件完全初始化完成后，会执行
     */
    attached () {
      console.log('com - attached')
    },
    /**
     * 组件生命周期：组件被卸载时会执行
     */
    detached () {
      console.log('com - detached')
    }
  }
})

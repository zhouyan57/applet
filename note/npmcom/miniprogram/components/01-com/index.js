// components/01-com/index.js
const computedBehavior = require('miniprogram-computed').behavior
Component({
  behaviors: [computedBehavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    firstname:'z',
    lastname:'y'
  },
computed:{
  fullname: function(data){
    return data.firstname + data.lastname
  }
},
  /**
   * 组件的方法列表
   */
  methods: {

  }
})

import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'

Vue.config.productionTip = false

import router from './router'

// import styles from '@/styles/message.module.less'
// const div = document.createElement('div')
// div.className = styles.message
// div.innerText = '测试消息'
// document.body.appendChild(div)

// 获取组件生成的 DOM
// function getComponentRootDom(comp, props) {
//   const vm = new Vue({
//     render: h => h(comp, { props })
//   })
//   vm.$mount()
//   return vm.$el
// }
// import Icon from '@/components/Icon'
// const dom = getComponentRootDom(Icon, { type: 'icon-mail' })
// console.log('dom ->', dom)

// 向实例注入成员
// Vue.prototype.sayHello = function () {
//   console.log('hello')
// }

import showMessage from './utils/showMessage.js'
Vue.prototype.$showMessage = showMessage
// showMessage('aaa')

import '@/mock'
import '@/api/banner.js'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// vm.sayHello()
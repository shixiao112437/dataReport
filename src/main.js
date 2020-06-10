import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/utils/request'
import '@/style/index.less' // 引入全局样式
import Element from 'element-ui' // 引入elementui
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import VueDraggable from 'vuedraggable'
// import VueDragResize from 'vue-drag-resize' // 引入拖拽组件
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
// Vue.component('vue-drag-resize', VueDragResize)
Vue.prototype.$axios = axios // 将axios赋值给 Vue对象的原型属性
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component('draggable', VueDraggable)
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

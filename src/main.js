import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.less' // 引入全局样式
import Element from 'element-ui' // 引入elementui
import 'element-ui/lib/theme-chalk/index.css' // 引入样式

// import VueDragResize from 'vue-drag-resize' // 引入拖拽组件
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
// Vue.component('vue-drag-resize', VueDragResize)
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

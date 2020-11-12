import Vue from 'vue'
import App from './App.vue'
// import Button from './components/button'
import Ui from '../packages'
// Vue.component(Button.name, Button)
Vue.use(Ui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

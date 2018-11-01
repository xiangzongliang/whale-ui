import Vue from 'vue'
import index from './index.vue'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(index)
})


import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

//生命使用路由
Vue.use(VueRouter)

//暴露路由器
export default new VueRouter({
    routes
})




import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

export default [
    {
        path:'/msite',
        component: MSite
    },
    {
        path:'/order',
        component: Order  
    },
    {
        path:'/profile',
        component: Profile
    },
    {
        path:'/Search',
        component: Search
    },
    {
        path: '/', //根目录
        redirect: '/MSite'
    }
]


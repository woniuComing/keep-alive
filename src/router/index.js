import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/Test'
// import listhome from '@/components/list/index.vue'
// import list from '@/components/list/index/index.vue'
import detail from '@/components/list/detail/index.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            // name: 'HelloWorld',
            component: r => require.ensure([], () => r(require('../components/home/index.vue')), 'home'),
            // meta: { KeepAlive: true },
            children: [{
                    path: '',
                    redirect: '/home/index'
                },
                {
                    path: 'index',
                    component: r => require.ensure([], () => r(require('../components/home/index/index.vue')), 'home'),
                    meta: { KeepAlive: true },
                },
                {
                    path: 'clean',
                    component: r => require.ensure([], () => r(require('../components/home/clean/index.vue')), 'home'),
                    meta: { KeepAlive: true },
                }
            ]
        },
        {
            path: '/test',
            name: 'Test',
            component: r => require.ensure([], () => r(require('../components/Test')), 'test'),
            meta: { KeepAlive: false }
        },
        {
            path: '/list',
            name: 'ListHome',
            component: r => require.ensure([], () => r(require('../components/list/index.vue')), 'list'),
            children: [{
                    path: 'index',
                    name: 'list',
                    component: r => require.ensure([], () => r(require('../components/list/index/index.vue')), 'list'),
                    meta: { KeepAlive: true }
                },
                // {
                //     path: 'app/:name',
                //     // name: 'bbb',
                //     component: detail
                // }
            ]
        }

    ]
})
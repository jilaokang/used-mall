import Vue from 'vue'
import Router from 'vue-router'

import app from './views/pages/app'
import home from './views/pages/home'
import chat from './views/pages/chat'
import detail from './views/pages/detail'
import list from './views/pages/list'
import me from './views/pages/me'
import message from './views/pages/message'
import push from './views/pages/push'
import search from './views/pages/search'
import index from './views/pages/index'
import mygood from './views/pages/mygood'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: app,
            redirect: 'app',
            children: [
                {
                    path: 'app',
                    component: home,
                    redirect: 'app/index',
                    children: [{
                        path: 'index',
                        component: index
                    },
                        {
                            path: 'search',
                            component: search
                        },
                        {
                            path: 'message',
                            component: message
                        },
                        {
                            path: 'me',
                            component: me
                        },
                        {
                            path: 'push',
                            component: push
                        }]
                },
                {
                    path: 'detail',
                    component: detail
                },
                {
                    path: 'list',
                    component: list
                },
                {
                    path: 'chat',
                    component: chat
                },
                {
                    path: 'mygood',
                    component: mygood
                }
            ]
        }
    ]
})

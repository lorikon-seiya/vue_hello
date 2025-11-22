import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import SockView from '@/views/SockView.vue'
import EventDetails from '@/views/event/Details.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventRegister from '@/views/event/Register.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import TodoApp from '@/views/todo-list/TodoApp.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'


const routes = [
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFound,
        props: true
    },
    {
        path: '/404/:resource',
        name: '404-resource',
        component: NotFound,
        props: true
    },
    {
        path: '/network-error',
        name: 'network-error',
        component: NetworkError
    },
    {
        path: '/',
        name: 'event-list',
        component: EventListView,
        props: (route) => {
            return {
                page: route.query.page || 1
            }
        }
    },
    {
        path: '/about-me',
        name: 'about',
        component: AboutView,
        alias: '/about'
    },
    {

        path: '/event/:afterEvent(.*)',
        redirect: to => {
            return { path: '/events/' + to.params.afterEvent }
        },

    },
    {
        path: '/events/:id',
        name: 'event-layout',
        props: true,
        component: EventLayout,

        children: [
            {
                path: '',
                name: "event-details",
                component: EventDetails,
            },
            {
                path: 'register',
                name: 'event-register',
                component: EventRegister
            },
            {
                path: 'edit',
                name: 'event-edit',
                component: EventEdit
            }
        ]
    },
    {
        path: '/socks',
        name: 'socks',
        component: SockView
    },
    {
        path: '/todo-list',
        name: 'todo-list',
        component: TodoApp
    }
]

// nprogress.configure({ minimum: 0.1 })

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

router.beforeEach(() => {
    nprogress.start()
})

router.afterEach(() => {
    // setTimeout(() => {
    //     nprogress.done()
    // }, 500)
    nprogress.done()
})

export default router
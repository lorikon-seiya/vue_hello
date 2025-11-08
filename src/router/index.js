import { createMemoryHistory, createRouter } from 'vue-router'

import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailsView from '@/views/EventDetailsView.vue'

const routes = [
    {
        path: '/',
        name: 'event-list',
        component: EventListView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/event/:id',
        name: 'event-details',
        props: true,
        component: EventDetailsView
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
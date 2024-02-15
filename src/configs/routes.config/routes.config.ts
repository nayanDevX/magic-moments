import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'myevents',
        path: '/myevents',
        component: lazy(() => import('@/views/pages/myevents/MyEvents')),
        authority: [],
    },
    {
        key: 'allpictures',
        path: '/event/allpictures/:id',
        component: lazy(
            () => import('@/views/pages/event-details/EventDetails')
        ),
        authority: [],
    },
    {
        key: 'mypictures',
        path: '/event/mypictures/:id',
        component: lazy(
            () => import('@/views/pages/event-details/EventDetails')
        ),
        authority: [],
    },
    {
        key: 'users',
        path: '/event/users/:id',
        component: lazy(
            () => import('@/views/pages/event-details/EventDetails')
        ),
        authority: [],
    },
]

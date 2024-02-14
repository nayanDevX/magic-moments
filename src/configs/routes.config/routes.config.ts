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
]

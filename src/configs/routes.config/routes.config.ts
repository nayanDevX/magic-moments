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
        path: '/event/:eid/allpictures/',
        component: lazy(
            () => import('@/views/pages/event-details/AllPictures')
        ),
        authority: [],
    },
    {
        key: 'mypictures',
        path: '/event/:eid/mypictures/',
        component: lazy(() => import('@/views/pages/event-details/MyPictures')),
        authority: [],
    },
    {
        key: 'users',
        path: '/event/:eid/users/',
        component: lazy(() => import('@/views/pages/event-details/Users')),
        authority: [],
    },
    {
        key: 'folderContent',
        path: '/event/:id/:type/:folder',
        component: lazy(
            () => import('@/views/pages/event-details/components/FolderContent')
        ),
        authority: [],
    },
    {
        key: 'profile',
        path: '/profile',
        component: lazy(() => import('@/views/pages/profile/Profile')),
        authority: [],
    },
]

import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'
import { HiAcademicCap } from 'react-icons/hi'

const navigationConfig: NavigationTree[] = [
    {
        key: 'myevents',
        path: '/myevents',
        title: 'My Events',
        translateKey: 'nav.myevents',
        icon: 'events',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
]

export default navigationConfig

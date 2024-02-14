import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
    HiOutlineHome,
    HiArchive,
    HiOutlineShieldCheck,
} from 'react-icons/hi'
import { BsCalendarEvent } from 'react-icons/bs'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    events: <BsCalendarEvent />,
}

export default navigationIcon

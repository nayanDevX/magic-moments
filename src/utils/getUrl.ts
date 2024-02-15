import { useLocation } from 'react-router-dom'
export function getUrl() {
    const location = useLocation()
    const { pathname, search, hash } = location
    const currentUrl = `${pathname}${search}${hash}`
    const splittedUrl = currentUrl.split('/')
    return { splittedUrl }
}

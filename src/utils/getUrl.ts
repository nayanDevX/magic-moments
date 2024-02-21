import { useLocation } from 'react-router-dom'

interface UrlInfo {
    pathname: string
    search: string
    hash: string
}

interface UrlResult {
    splittedUrl: string[]
    currentUrl: string
}

export function getUrl(position?: number): any {
    const location = useLocation()
    const { pathname, search, hash }: UrlInfo = location
    const currentUrl = `${pathname}${search}${hash}`
    const splittedUrl = currentUrl.split('/')

    if (position !== undefined) {
        return splittedUrl[position]
    } else {
        return { splittedUrl, currentUrl }
    }
}

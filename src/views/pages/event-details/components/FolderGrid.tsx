import { useEffect } from 'react'
import Folder from './Folder'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchFoldersById } from '@/store/slices/data/fetchFoldersById'
import { getUrl } from '@/utils/getUrl'
import { useLocation } from 'react-router-dom'

const FolderGrid = () => {
    const dispatch = useAppDispatch()
    const Eid = getUrl(2)

    useEffect(() => {
        dispatch(fetchFoldersById({ Eid: Eid }))
    }, [])
    const folders = useAppSelector((state) => state.data.folders.folders)

    return (
        <div className="grid grid-cols-6 gap-8 mt-4">
            {folders?.map((folder, key) => (
                <Folder key={key} folderName={folder.name} />
            ))}
        </div>
    )
}

export default FolderGrid

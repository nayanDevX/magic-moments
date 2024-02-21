import Button from '@/components/ui/Button'
import { useAppDispatch } from '@/store'
import { setAddFolderDialogue } from '@/store/slices/data/dialogueHandlingSlice'
import PictureTabs from './components/PictureTabs'
import FolderGrid from './components/FolderGrid'
import FormDialogue from './components/FormDialogue'

const EventDetails = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <PictureTabs />
            <FolderGrid />
            <FormDialogue />
        </div>
    )
}

export default EventDetails

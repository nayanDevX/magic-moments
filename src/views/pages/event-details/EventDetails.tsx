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
            <div className="flex justify-between items-center">
                <h4 className="mr-auto">Music Event</h4>
            </div>
            <PictureTabs />
            <FolderGrid />
            <FormDialogue />
        </div>
    )
}

export default EventDetails

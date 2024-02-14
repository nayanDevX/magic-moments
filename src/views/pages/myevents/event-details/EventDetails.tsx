import Button from '@/components/ui/Button'
import { useAppDispatch } from '@/store'
import { setCreateEventDialogue } from '@/store/slices/data/dialogueHandlingSlice'

const EventDetails = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <div className="flex justify-between items-center">
                <h4 className="mr-auto">Music Event</h4>
                <div className="space-x-2">
                    <Button
                        type="submit"
                        size="sm"
                        variant="twoTone"
                        className="text-sm"
                    >
                        Add Folder
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EventDetails

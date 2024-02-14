import { Dialog } from '@/components/ui'
import Button from '@/components/ui/Button'
import { useAppDispatch, useAppSelector } from '@/store'
import {
    setCreateEventDialogue,
    setJoinEventDialogue,
} from '@/store/slices/data/dialogueHandlingSlice'
import CreateEventForm from './CreateEventForm'
import JoinEventForm from './JoinEventForm'

const FormDialogue = () => {
    const dispatch = useAppDispatch()
    const { isCreateEventDialogue, isJoinEventDialogue } = useAppSelector(
        (state) => state.data.dialogue
    )
    return (
        <div>
            <Dialog
                height={'230px'}
                onClose={() => {
                    isCreateEventDialogue
                        ? dispatch(setCreateEventDialogue(false))
                        : dispatch(setJoinEventDialogue(false))
                }}
                isOpen={isCreateEventDialogue || isJoinEventDialogue}
            >
                {isCreateEventDialogue && (
                    <div>
                        <h5>Create Event</h5>
                        <CreateEventForm />
                    </div>
                )}
                {isJoinEventDialogue && (
                    <div>
                        <h5>Join Event</h5>
                        <JoinEventForm />
                    </div>
                )}
            </Dialog>
        </div>
    )
}

export default FormDialogue

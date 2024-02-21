import { Dialog } from '@/components/ui'
import Button from '@/components/ui/Button'
import { useAppDispatch, useAppSelector } from '@/store'
import { setAddFolderDialogue } from '@/store/slices/data/dialogueHandlingSlice'
import AddFolderForm from './NewFolderForm'

const FormDialogue = () => {
    const dispatch = useAppDispatch()
    const { isAddFolderDialogue } = useAppSelector(
        (state) => state.data.dialogue
    )

    return (
        <div>
            <Dialog
                contentClassName="pb-1"
                height={'h-full'}
                onClose={() => {
                    dispatch(setAddFolderDialogue(false))
                }}
                isOpen={isAddFolderDialogue}
            >
                {isAddFolderDialogue && (
                    <div>
                        <h5>New Folder</h5>
                        <AddFolderForm />
                    </div>
                )}
            </Dialog>
        </div>
    )
}

export default FormDialogue

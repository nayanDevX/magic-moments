import { Button, Dialog } from '@/components/ui'
import EventCards from './components/EventCardGrid'
import { useAppDispatch } from '@/store'
import {
    setCreateEventDialogue,
    setJoinEventDialogue,
} from '@/store/slices/data/dialogueHandlingSlice'
import FormDialogue from './components/FormDialogue'
import { useEffect } from 'react'
import { fetchAuthSession } from 'aws-amplify/auth'
import { fetchCurrentUser } from '@/store/slices/data/fetchCurrentUser'
const MyEvents = () => {
    const dispatch = useAppDispatch()

    const handleKeyDown = (event: any) => {
        console.log('Key pressed:', event.key)
    }

    useEffect(() => {
        dispatch(fetchCurrentUser())
        // const fetchData = async () => {
        //     const accessToken = (
        //         await fetchAuthSession()
        //     ).tokens?.idToken?.toString()
        //     console.log(accessToken)
        // }
        // fetchData()
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center">
                <h4 className="mr-auto">My Events</h4>
                <div className="space-x-2">
                    <Button
                        type="submit"
                        size="sm"
                        variant="solid"
                        className="text-sm"
                        onClick={() => {
                            dispatch(setJoinEventDialogue(true))
                        }}
                    >
                        Join Events
                    </Button>

                    <Button
                        type="submit"
                        size="sm"
                        variant="solid"
                        className="text-sm"
                        onClick={() => {
                            dispatch(setCreateEventDialogue(true))
                        }}
                    >
                        Create Events
                    </Button>
                </div>
            </div>
            <hr className="my-4" />
            <EventCards />
            <FormDialogue />
        </div>
    )
}

export default MyEvents

import { useAppDispatch, useAppSelector } from '@/store'
import { fetchAllEvents } from '@/store/slices/data/fetchAllEvents'
import Event from '@/views/pages/myevents/components/EventCard'
import { useEffect } from 'react'
const EventCards = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAllEvents())
    }, [])
    const events = useAppSelector((state) => state.data.allEvents.events)

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {events?.map((event, key) => (
                    <Event key={key} event={event} />
                ))}
            </div>
        </div>
    )
}
export default EventCards

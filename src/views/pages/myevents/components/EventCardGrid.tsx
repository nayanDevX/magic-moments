import Event from '@/views/pages/myevents/components/EventCard'
import { Link } from 'react-router-dom'
const EventCards = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </div>
        </div>
    )
}
export default EventCards

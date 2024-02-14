import Event from '@/views/pages/myevents/components/Event'
import { Link } from 'react-router-dom'
const EventCards = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <Link to="/event/1">
                    <Event />
                </Link>
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

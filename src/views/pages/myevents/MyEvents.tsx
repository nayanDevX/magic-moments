import { Button } from '@/components/ui'
import EventCards from './components/EventCards'

const MyEvents = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h4 className="mr-auto">My Events</h4>
                <div className="space-x-2">
                    <Button
                        type="submit"
                        size="sm"
                        variant="twoTone"
                        className="text-sm"
                    >
                        Join Events
                    </Button>
                    <Button
                        type="submit"
                        size="sm"
                        variant="twoTone"
                        className="text-sm"
                    >
                        Create Events
                    </Button>
                </div>
            </div>
            <hr className="my-4" />
            <EventCards />
        </div>
    )
}

export default MyEvents

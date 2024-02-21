import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import { MdContentCopy } from 'react-icons/md'
import { Tooltip } from '@/components/ui'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'
import { title } from 'process'
import { formatDate } from '@/utils/formatDate'

interface EventCard {
    event: any
}
const EventCard = ({ event }: EventCard) => {
    const [showCopyIcon, setShowCopyIcon] = useState(true)
    const [enableCopy, setEnableCopy] = useState(false)

    useEffect(() => {
        event.role === 'ADMIN' ? setEnableCopy(true) : setEnableCopy(false)
    }, [event.role])

    const handleCopyClick = () => {
        setShowCopyIcon(false)
        setTimeout(() => {
            setShowCopyIcon(true)
        }, 2000)
        navigator.clipboard.writeText('xyz')
    }

    const cardFooter = (
        <div className="">
            <hr className="text-black" />

            <div className="flex items-center pt-1">
                <Avatar
                    size={30}
                    className="mr-2"
                    shape="circle"
                    src="/img/avatars/thumb-4.jpg"
                />
                <span className="flex items-center w-full">
                    <h6 className="text-sm">{event.event.createdBy?.name}</h6>
                    {enableCopy === true && (
                        <span className="ml-auto">
                            {showCopyIcon === true ? (
                                <Tooltip title="Copy Link">
                                    <MdContentCopy
                                        onClick={handleCopyClick}
                                        size={'1.3em'}
                                    />
                                </Tooltip>
                            ) : (
                                <MdOutlineCheckCircleOutline size={'1.5em'} />
                            )}
                        </span>
                    )}
                </span>
            </div>
        </div>
    )

    const cardHeader = (
        <Link to={`/event/${event.event.id}/allpictures`}>
            <div className="rounded-tl-lg rounded-tr-lg overflow-hidden">
                <img src="../src/assets/event-photo.jpeg" alt="card header" />
            </div>
        </Link>
    )
    const date = formatDate(event.event.createdAt)

    return (
        <div className="max-w-xs">
            <Card
                clickable
                className=" hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid"
                header={cardHeader}
                footer={cardFooter}
                headerClass="p-0"
                footerClass="pt-0"
                footerBorder={false}
                headerBorder={false}
            >
                <span className="text-emerald-600 font-semibold">{date}</span>
                <h4 className="font-bold mt-1">{event.event.name}</h4>
            </Card>
        </div>
    )
}

export default EventCard

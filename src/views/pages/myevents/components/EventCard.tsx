import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'
import { MdContentCopy } from 'react-icons/md'
import { Tooltip } from '@/components/ui'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdOutlineCheckCircleOutline } from 'react-icons/md'

const EventCard = () => {
    const [showCopyIcon, setShowCopyIcon] = useState(true)
    const handleCopyClick = () => {
        console.log('clicked')

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
                    <h6 className="text-sm">Brijesh</h6>
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
                </span>
            </div>
        </div>
    )

    const cardHeader = (
        <Link to="/event/allpictures/1">
            <div className="rounded-tl-lg rounded-tr-lg overflow-hidden">
                <img src="../src/assets/event-photo.jpeg" alt="card header" />
            </div>
        </Link>
    )
    const date = new Date()
    const dateString = `${
        date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`

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
                <span className="text-emerald-600 font-semibold">
                    {dateString}
                </span>
                <h4 className="font-bold mt-1">Music Concert</h4>
            </Card>
        </div>
    )
}

export default EventCard

import { Tooltip } from '@/components/ui'
import Card from '@/components/ui/Card'
import { getUrl } from '@/utils/getUrl'
import { current } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

const Folder = ({ folderName }: { folderName: string }) => {
    const fullName = folderName
    if (folderName.length > 14) {
        folderName = folderName.substring(0, 10) + '...'
    }
    const cardFooter = (
        <div className="flex justify-center mt-1">
            <Tooltip title={fullName}>
                <span className="text-md text-black">{folderName}</span>
            </Tooltip>
        </div>
    )

    const cardHeader = (
        <div className="rounded-tl-lg rounded-tr-lg overflow-hidden pt-0">
            <img
                src="../../src/assets/folder.png"
                alt="card header"
                className="filter brightness-100 grayscale-0"
            />
        </div>
    )
    const { currentUrl } = getUrl()
    const navigate = useNavigate()
    return (
        <div className="max-w-xs mt-4">
            <Card
                onDoubleClick={() => {
                    navigate(
                        `${currentUrl}/${folderName
                            .replace(/\s+/g, '-')
                            .toLowerCase()}`
                    )
                }}
                clickable
                className="hover:shadow-lg border-0 transition duration-150 ease-in-out "
                header={cardHeader}
                footer={cardFooter}
                headerClass="p-0"
                footerClass="pt-0"
                footerBorder={false}
                headerBorder={false}
                bodyClass="p-0"
            ></Card>
        </div>
    )
}

export default Folder

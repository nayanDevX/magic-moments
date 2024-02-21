import { Button } from '@/components/ui'
import Tabs from '@/components/ui/Tabs'
import { useAppDispatch, useAppSelector } from '@/store'
import { setAddFolderDialogue } from '@/store/slices/data/dialogueHandlingSlice'
import { fetchEventById } from '@/store/slices/data/fetchEventById'
import { getUrl } from '@/utils/getUrl'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { TabNav, TabList } = Tabs

const PictureTabs = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { splittedUrl } = getUrl()
    const type = getUrl(3)
    const Eid = getUrl(2)

    useEffect(() => {
        dispatch(fetchEventById({ Eid: Eid }))
    }, [])
    const eventTitle = useAppSelector((state) => state.data.event.event?.name)
    console.log(eventTitle)

    const shiowButton = type === 'users' ? false : true

    return (
        <div>
            <div className="flex justify-between items-center">
                <h4 className="mr-auto">{eventTitle}</h4>
            </div>
            <Tabs
                variant="pill"
                onChange={(value) => {
                    navigate(`/event/${Eid}/${value}`)
                }}
                defaultValue="allpictures"
                value={splittedUrl[3]}
                className="mt-4"
            >
                <TabList>
                    <TabNav value="allpictures">All Pictures</TabNav>
                    <TabNav value="mypictures">My Pictures</TabNav>
                    <TabNav value="users">Users</TabNav>
                    {shiowButton && (
                        <Button
                            size="sm"
                            variant="solid"
                            className="text-sm ml-auto"
                            onClick={() => {
                                dispatch(setAddFolderDialogue(true))
                            }}
                        >
                            New Folder
                        </Button>
                    )}
                </TabList>
            </Tabs>
        </div>
    )
}

export default PictureTabs

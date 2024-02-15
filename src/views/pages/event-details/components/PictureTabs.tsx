import { Button } from '@/components/ui'
import Tabs from '@/components/ui/Tabs'
import { useAppDispatch } from '@/store'
import { setAddFolderDialogue } from '@/store/slices/data/dialogueHandlingSlice'
import { getUrl } from '@/utils/getUrl'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { TabNav, TabList } = Tabs

const PictureTabs = () => {
    const navigate = useNavigate()
    // const [selectedTab, setSelectedTab] = useState('allpictures')
    const dispatch = useAppDispatch()
    const { splittedUrl } = getUrl()
    console.log(splittedUrl[2])

    return (
        <div>
            <Tabs
                variant="pill"
                onChange={(value) => {
                    console.log(value)

                    // setSelectedTab(value)
                    navigate(`/event/${value}/1`)
                }}
                defaultValue="allpictures"
                value={splittedUrl[2]}
                className="mt-4"
            >
                <TabList>
                    <TabNav value="allpictures">All Pictures</TabNav>
                    <TabNav value="mypictures">My Pictures</TabNav>
                    <TabNav value="users">Users</TabNav>
                    <Button
                        size="sm"
                        variant="solid"
                        className="text-sm ml-auto"
                        onClick={() => {
                            dispatch(setAddFolderDialogue(true))
                        }}
                    >
                        Add Folder
                    </Button>
                </TabList>
            </Tabs>
        </div>
    )
}

export default PictureTabs

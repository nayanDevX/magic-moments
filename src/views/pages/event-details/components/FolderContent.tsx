import EventImages from './EventImages'
import group from '@/assets/group.webp'

import group1 from '@/assets/group-1.webp'
import group2 from '@/assets/group-3.webp'

const FolderContent = () => {
    return (
        <div>
            {/* <h4>Folder Content</h4> */}
            <EventImages
                values={{
                    imgList: [
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group1,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group2,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group1,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group2,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group1,
                        },
                        {
                            id: '1-img-0',
                            name: 'Grand Finale.jpg',
                            img: group2,
                        },
                    ],
                }}
            />
        </div>
    )
}

export default FolderContent

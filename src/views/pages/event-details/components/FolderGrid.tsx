import { Link } from 'react-router-dom'
import Folder from './Folder'

const FolderGrid = () => {
    return (
        <div className="grid grid-cols-5 gap-8 mt-4">
            <Folder folderName="Grand Finale" />
            <Folder folderName="Grand Finale 1" />
            <Folder folderName="Grand Finale 2" />

            <Folder folderName="Grand Finale 3" />
            <Folder folderName="Grand Finale 4" />
            <Folder folderName="Grand Finale 5" />
            <Folder folderName="Grand Finale 6" />
            <Folder folderName="Grand Finale 7" />
            <Folder folderName="Grand Finale 8" />
            <Folder folderName="Grand Finale 9" />
            <Folder folderName="Grand Finale 10" />
        </div>
    )
}

export default FolderGrid

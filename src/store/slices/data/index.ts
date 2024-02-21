import { combineReducers } from '@reduxjs/toolkit'
import dialogue, { DialogueState } from './dialogueHandlingSlice'
import allEvents, { EventsState } from './fetchAllEvents'
import event, { EventState } from './fetchEventById'
import currentUser, { CurrentUserState } from './fetchCurrentUser'
import folders, { FoldersState } from './fetchFoldersById'

const reducer = combineReducers({
    dialogue,
    allEvents,
    event,
    currentUser,
    folders,
})

export type DataState = {
    dialogue: DialogueState
    allEvents: EventsState
    event: EventState
    currentUser: CurrentUserState
    folders: FoldersState
}

export default reducer

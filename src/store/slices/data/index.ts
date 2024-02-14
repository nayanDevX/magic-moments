import { combineReducers } from '@reduxjs/toolkit'
import dialogue, { DialogueState } from './dialogueHandlingSlice'

const reducer = combineReducers({
    dialogue,
})

export type DataState = {
    dialogue: DialogueState
}

export default reducer

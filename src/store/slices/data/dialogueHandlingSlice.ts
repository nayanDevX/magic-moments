import { createSlice } from '@reduxjs/toolkit'

export type DialogueState = {
    isCreateEventDialogue: boolean
    isJoinEventDialogue: boolean
    isAddFolderDialogue: boolean
}

const initialState: DialogueState = {
    isCreateEventDialogue: false,
    isJoinEventDialogue: false,
    isAddFolderDialogue: false,
}

export const dialogueHandlingSlice = createSlice({
    name: 'dialogue',
    initialState,
    reducers: {
        setAddFolderDialogue: (state, action) => {
            state.isAddFolderDialogue = action.payload
        },
        setCreateEventDialogue: (state, action) => {
            state.isCreateEventDialogue = action.payload
        },
        setJoinEventDialogue: (state, action) => {
            state.isJoinEventDialogue = action.payload
        },
    },
})

export const {
    setCreateEventDialogue,
    setJoinEventDialogue,
    setAddFolderDialogue,
} = dialogueHandlingSlice.actions

export default dialogueHandlingSlice.reducer

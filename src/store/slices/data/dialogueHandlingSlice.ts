import { createSlice } from '@reduxjs/toolkit'

export type DialogueState = {
    isCreateEventDialogue: boolean
    isJoinEventDialogue: boolean
}

const initialState: DialogueState = {
    isCreateEventDialogue: false,
    isJoinEventDialogue: false,
}

export const dialogueHandlingSlice = createSlice({
    name: 'dialogue',
    initialState,
    reducers: {
        setCreateEventDialogue: (state, action) => {
            state.isCreateEventDialogue = action.payload
        },
        setJoinEventDialogue: (state, action) => {
            state.isJoinEventDialogue = action.payload
        },
    },
})

export const { setCreateEventDialogue, setJoinEventDialogue } =
    dialogueHandlingSlice.actions

export default dialogueHandlingSlice.reducer

import { get } from 'aws-amplify/api'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

interface Folder {
    eventId: string
    isArchived: boolean
    userId: string
    updatedAt: string
    createdAt: string
    id: string
    createdBy: {
        name: string
        userId: string
    }
    name: string
}

export interface FoldersState {
    success: boolean
    folders: Folder[]
    loading: boolean
    error?: string | null
}

const initialState: FoldersState = {
    success: false,
    folders: [],
    loading: false,
    error: null,
}

export const fetchFoldersById = createAsyncThunk(
    'folders/fetch',
    async ({ Eid }: { Eid: string }) => {
        try {
            const response = await get({
                apiName: 'restapi',
                path: `/events/${Eid}/folders`,
            }).response

            const resp = await response.body.json()
            console.log(resp)

            const { success, folders } = resp as any
            return { success, folders }
        } catch (error) {
            console.error('Error fetching all folders:', error)
            throw error
        }
    }
)

const foldersSlice = createSlice({
    name: `${SLICE_BASE_NAME}/folders`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoldersById.pending, (state) => {})
            .addCase(fetchFoldersById.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.folders = action.payload.folders
            })
            .addCase(fetchFoldersById.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to fetching all folders'
            })
    },
})

export default foldersSlice.reducer

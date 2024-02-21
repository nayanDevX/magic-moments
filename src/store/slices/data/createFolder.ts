import { post } from 'aws-amplify/api'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export interface CreateFolderState {
    statusCode: number
    error: string | null
    loading: boolean
}

const initialState: CreateFolderState = {
    statusCode: 0,
    error: null,
    loading: false,
}

export const createFolder = createAsyncThunk(
    'createFolder/createFolder',
    async ({ folder, Eid }: any) => {
        console.log(folder, Eid)
        try {
            const response = await post({
                apiName: 'restapi',
                path: `/events/${Eid}/folders`,
                options: {
                    body: folder,
                },
            }).response

            const { statusCode } = response

            return { statusCode }
        } catch (error) {
            console.error('Error creating folder:', error)
            throw error
        }
    }
)

const createFolderSlice = createSlice({
    name: `${SLICE_BASE_NAME}/createFolder`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createFolder.pending, (state) => {})
            .addCase(createFolder.fulfilled, (state, action) => {
                state.loading = false
                state.statusCode = action.payload.statusCode
            })
            .addCase(createFolder.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to creating folder'
            })
    },
})

export default createFolderSlice.reducer

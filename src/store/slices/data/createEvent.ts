import { post } from 'aws-amplify/api'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export interface CreateEventState {
    statusCode: number
    error: string | null
    loading: boolean
}

const initialState: CreateEventState = {
    statusCode: 0,
    error: null,
    loading: false,
}

export const createEvent = createAsyncThunk(
    'createEvent/createEvent',
    async (event: any) => {
        try {
            const response = await post({
                apiName: 'restapi',
                path: '/events',
                options: {
                    body: event,
                },
            }).response

            const { statusCode } = response

            return { statusCode }
        } catch (error) {
            console.error('Error creating event:', error)
            throw error
        }
    }
)

const createEventSlice = createSlice({
    name: `${SLICE_BASE_NAME}/createEvent`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createEvent.pending, (state) => {})
            .addCase(createEvent.fulfilled, (state, action) => {
                state.loading = false
                state.statusCode = action.payload.statusCode
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to creating event'
            })
    },
})

export default createEventSlice.reducer

import { get } from 'aws-amplify/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

interface Event {
    eventId: string
    role: string
    userId: string
    updatedAt: string
    userName: string
}

export interface EventsState {
    success: boolean
    events: Event[]
    loading: boolean
    error?: string | null
}

const initialState: EventsState = {
    success: false,
    events: [],
    loading: false,
    error: null,
}

export const fetchAllEvents = createAsyncThunk('Events/fetch', async () => {
    try {
        const response = await get({ apiName: 'restapi', path: '/events' })
            .response

        const resp = await response.body.json()
        console.log(resp)

        const { success, events } = resp as any
        return { success, events }
    } catch (error) {
        console.error('Error fetching all events:', error)
        throw error
    }
})

const eventsSlice = createSlice({
    name: `${SLICE_BASE_NAME}/Events`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllEvents.pending, (state) => {})
            .addCase(fetchAllEvents.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.events = action.payload.events
            })
            .addCase(fetchAllEvents.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to fetching all events'
            })
    },
})

export default eventsSlice.reducer

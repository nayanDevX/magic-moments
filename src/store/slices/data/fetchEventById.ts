import { get } from 'aws-amplify/api'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

interface Event {
    id: string
    name: string
    code: number
    isArchived: boolean
    createdAt: string
    updatedAt: string
    userId: string
    userName: string
}

export interface EventState {
    success: boolean
    role: string
    event: Event | null
    loading: boolean
    error?: string | null
}

const initialState: EventState = {
    success: false,
    role: '',
    event: null,
    loading: false,
    error: null,
}

export const fetchEventById = createAsyncThunk(
    'Event/fetch',
    async ({ Eid }: { Eid: string }) => {
        try {
            const response = await get({
                apiName: 'restapi',
                path: `/events/${Eid}`,
            }).response

            const resp = await response.body.json()
            console.log(resp)

            const { success, event, role } = resp as any
            return { success, event, role }
        } catch (error) {
            console.error('Error fetching event by id :', error)
            throw error
        }
    }
)

const eventSlice = createSlice({
    name: `${SLICE_BASE_NAME}/Event`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventById.pending, (state) => {})
            .addCase(fetchEventById.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.event = action.payload.event.event
                state.role = action.payload.role
            })
            .addCase(fetchEventById.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to fetching event by id '
            })
    },
})

export default eventSlice.reducer

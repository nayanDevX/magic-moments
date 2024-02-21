import { get } from 'aws-amplify/api'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export interface CurrentUser {
    confirmedAt: string
    email: string
    id: string
    name: string
    profile: string
    status: string
    updatedAt: string
}

export interface CurrentUserState {
    success: boolean
    user: CurrentUser
    loading: boolean
    error?: string | null
}

const initialState: CurrentUserState = {
    success: false,
    user: {
        confirmedAt: '',
        email: '',
        id: '',
        name: '',
        profile: '',
        status: '',
        updatedAt: '',
    },

    loading: false,
    error: null,
}

export const fetchCurrentUser = createAsyncThunk(
    'currentUser/fetch',
    async () => {
        try {
            const response = await get({
                apiName: 'restapi',
                path: '/me',
            }).response

            const resp = await response.body.json()
            console.log(resp)

            const { success, user } = resp as any
            return { success, user }
        } catch (error) {
            console.error('Error fetching current user:', error)
            throw error
        }
    }
)

const currentUserSlice = createSlice({
    name: `${SLICE_BASE_NAME}/currentUser`,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {})
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.user = action.payload.user
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.loading = false
                state.error =
                    action.error.message || 'Failed to fetch current user'
            })
    },
})

export default currentUserSlice.reducer

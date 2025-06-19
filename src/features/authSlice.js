import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
        setUserName: (state, action) => {
            state.username = action.payload
        }
    }
})

export const {login, logout, setUserName} = authSlice.actions
export default authSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import { signUp, login } from "../actions/teacherActions"

const teacherSlice = createSlice({
  name: "teacher",
  initialState: { jwt: null, error: null },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.jwt = payload.jwt
      state.error = null
    },
    [login.rejected]: (state) => {
      state.error = "Invalid credentials"
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.jwt = payload.jwt
      state.error = null
    },
    [signUp.rejected]: (state) => {
      state.error = "Invalid credentials"
    },
  },
})

export default teacherSlice.reducer

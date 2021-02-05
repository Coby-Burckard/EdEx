import { createSlice } from "@reduxjs/toolkit"
import { signUp } from "../actions/teacherActions"

const teacherSlice = createSlice({
  name: "teacher",
  initialState: { jwt: null, error: null },
  reducers: {},
  extraReducers: {
    [signUp.fulfilled]: (state, { payload }) => {
      state.jwt = payload.jwt || null
      state.error = null
    },
    [signUp.rejected]: (state) => {
      state.error = "Invalid sign up"
    },
  },
})

export default teacherSlice.reducer

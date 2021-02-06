import { createSlice } from "@reduxjs/toolkit"
import { wakeUp } from "../actions/wakeUpActions"

const awakeSlice = createSlice({
  name: "awake",
  initialState: { awake: false },
  reducers: {},
  extraReducers: {
    [wakeUp.fulfilled]: (state) => {
      state.awake = true
    },
    [wakeUp.rejected]: (state) => {
      state.awake = false
    },
  },
})

export default awakeSlice.reducer

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import teacherSlice from "./slices/teacherSlice"
import awakeSlice from "./slices/awakeSlice"

const preLoadedState = {}

const reducer = {
  teacher: teacherSlice,
  awake: awakeSlice,
}

export default configureStore({
  reducer,
})

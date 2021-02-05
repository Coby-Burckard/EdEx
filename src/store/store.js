import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import teacherSlice from "./slices/teacherSlice"

const preLoadedState = {}

const reducer = {
  teacher: teacherSlice,
}

export default configureStore({
  reducer,
})

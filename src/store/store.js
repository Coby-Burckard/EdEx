import { configureStore } from "@reduxjs/toolkit"
import teacherSlice from "./slices/teacherSlice"
import awakeSlice from "./slices/awakeSlice"

const reducer = {
  teacher: teacherSlice,
  awake: awakeSlice,
}

export default configureStore({
  reducer,
})

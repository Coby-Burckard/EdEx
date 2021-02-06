import { createAsyncThunk } from "@reduxjs/toolkit"
import request from "./requests/request"

const wakeUp = createAsyncThunk(
  "wakeUp",
  async (credentials, { rejectWithValue }) => {
    console.log("waking up")
    //requesting sign up
    const response = await request("wakeup", {
      method: "GET",
    })
    console.log(response)

    //checking status
    if (response.status !== 200) {
      return rejectWithValue()
    }

    const body = await response.json()

    //checking body
    if (body.message !== "I am awake") {
      return rejectWithValue()
    }

    return body
  }
)

export { wakeUp }

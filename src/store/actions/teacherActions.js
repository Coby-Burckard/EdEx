import { createAsyncThunk } from "@reduxjs/toolkit"
import request from "./requests/request"

const signUp = createAsyncThunk(
  "signUp",
  async (credentials, { rejectWithValue }) => {
    const response = await request("teachers", {
      method: "POST",
      body: JSON.stringify(credentials),
    })

    //error checking
    console.log(response.status, response.jwt, response)
    if (typeof response.jwt !== "string") {
      return rejectWithValue("unable to sign up")
    }

    return response
  }
)

export { signUp }

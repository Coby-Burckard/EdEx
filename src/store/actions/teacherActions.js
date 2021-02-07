import { createAsyncThunk } from "@reduxjs/toolkit"
import request from "./requests/request"

const signUp = createAsyncThunk(
  "signUp",
  async (credentials, { rejectWithValue }) => {
    const errorMessage = "Unable to sign up"

    //requesting sign up
    const response = await request("teachers", {
      method: "POST",
      body: JSON.stringify(credentials),
    })

    //checking status
    if (response.status !== 201) {
      return rejectWithValue(errorMessage)
    }

    const body = await response.json()

    //checking body
    if (typeof body.jwt !== "string") {
      return rejectWithValue(errorMessage)
    }

    return body
  }
)

const login = createAsyncThunk(
  "login",
  async (credentials, { rejectWithValue }) => {
    const errorMessage = "Unable to login"

    //requesting sign up
    const response = await request("teachers/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    })

    //checking status
    if (response.status !== 200) {
      return rejectWithValue(errorMessage)
    }

    const body = await response.json()

    //checking body
    if (typeof body.jwt !== "string") {
      return rejectWithValue(errorMessage)
    }

    return body
  }
)

export { signUp, login }

import { API_URL } from "./constants"

const request = async (endpoint, options) => {
  try {
    const url = API_URL + endpoint

    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    })

    return await response.json()
  } catch {
    throw new Error("unable to login")
  }
}

export default request

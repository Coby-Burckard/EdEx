import { API_URL } from "../constants"

const checkIfLoading = async () => {
  const response = await fetch(`${API_URL}/wakeup`)
  const data = await response.json()

  return data.message === "I am awake"
}

export { checkIfLoading }

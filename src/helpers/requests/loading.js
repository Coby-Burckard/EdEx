import { API_URL } from "../constants"

const checkIfLoading = async () => {
  const response = await fetch(`${API_URL}/wakeup`)
  const data = await response.json()
  console.log(data.message)
  return data.message !== "I am awake"
}

export { checkIfLoading }

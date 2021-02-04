import React, { useState } from "react"
import useInterval from "use-interval"
import { checkIfLoading } from "../../helpers/requests/loading"

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false)

  useInterval(
    async () => {
      const loadRes = await checkIfLoading()
      setIsLoading(loadRes)
    },
    1000,
    true
  )

  return (
    <>
      {isLoading && (
        <div className="loading">
          <p>Loading</p>
        </div>
      )}
    </>
  )
}

export default Loading

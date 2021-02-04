import React, { useEffect, useState } from "react"
import useInterval from "use-interval"
import { CSSTransition } from "react-transition-group"
import { checkIfLoading } from "../../helpers/requests/loading"

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  useInterval(
    async () => {
      const loadRes = await checkIfLoading()
      console.log(loadRes)
      setIsLoading(loadRes)
    },
    2000,
    true
  )

  console.log("is loading", isLoading)
  return (
    <>
      <CSSTransition
        in={isLoading}
        timeout={200000}
        classNames="loading__transition"
      >
        <div className="loading">
          <p>Loading</p>
        </div>
      </CSSTransition>
    </>
  )
}

export default Loading

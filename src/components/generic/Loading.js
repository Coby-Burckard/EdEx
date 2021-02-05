import React, { useEffect, useState } from "react"
import useInterval from "use-interval"
import { CSSTransition } from "react-transition-group"
import { checkIfLoading } from "../../helpers/requests/loading"
import heroku from "../images/heroku.svg"

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  useInterval(
    async () => {
      const loadRes = await checkIfLoading()
      setIsLoading(loadRes)
    },
    4000,
    false
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
          <div className="loading__content container">
            <div className="loading__img-container">
              <img src={heroku} alt="heroku logo" />
              <div className="loading__z fadeOutZOne">Z</div>
              <div className="loading__z fadeOutZTwo">Z</div>
            </div>
            <p>Waking Up Heroku</p>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

export default Loading

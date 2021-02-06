import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useInterval from "use-interval"
import { CSSTransition } from "react-transition-group"
import heroku from "../images/heroku.svg"
import { wakeUp } from "../../store/actions/wakeUpActions"

const Loading = () => {
  const dispatch = useDispatch()
  const awake = useSelector((state) => state.awake.awake)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!awake) {
      setIsLoading(true)
    }
  }, [])

  useInterval(
    async () => {
      if (awake) {
        setIsLoading(false)
      } else {
        dispatch(wakeUp())
      }
    },
    3000,
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

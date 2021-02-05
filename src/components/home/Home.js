import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Loading from "../generic/Loading"
import HomeContent from "./HomeContent"
import { signUp } from "../../store/actions/teacherActions"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      signUp({
        email: "nasdf@coby.com",
        password: "123abc",
      })
    )
  }, [])

  return (
    <>
      <Loading />
      <HomeContent />
    </>
  )
}

export default Home

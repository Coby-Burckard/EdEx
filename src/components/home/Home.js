import React from "react"
import Loading from "../generic/Loading"
import Nav from "../generic/Nav"
import HomeContent from "./HomeContent"

const Home = () => {
  return (
    <>
      <Loading />
      <Nav />
      <HomeContent />
    </>
  )
}

export default Home

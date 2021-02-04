import React, { useState } from "react"
import Loading from "../generic/Loading"

const Home = (props) => {
  return (
    <>
      <Loading />
      <p className="home opaque fadeInDelayed">hello</p>
      <p>hi there</p>
    </>
  )
}

export default Home

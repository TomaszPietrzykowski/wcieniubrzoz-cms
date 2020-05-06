import React from "react"

import Dashboard from "../Dashboard"
import HelpBtn from "../HelpBtn"

const Home = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#777",
          marginTop: "7rem",
          marginBottom: "7rem",
          fontFamily: "Raleway",
        }}
      >
        Wybierz sekcję do edycji
      </h1>
      <Dashboard />
      <HelpBtn />
    </div>
  )
}

export default Home

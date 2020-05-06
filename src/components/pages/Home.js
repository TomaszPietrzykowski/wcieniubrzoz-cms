import React from "react"

import UserPanel from "../UserPanel"
import Dashboard from "../Dashboard"

const Home = () => {
  return (
    <div>
      <br />
      <br />
      <h1 style={{ textAlign: "center", color: "#777" }}>Home</h1>
      <UserPanel />
      <Dashboard />
      <p style={{ minHeight: "60vh" }}></p>
    </div>
  )
}

export default Home

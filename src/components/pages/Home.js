import React from "react"

import SectionHeader from "../SectionHeader"
import Dashboard from "../Dashboard"
import HelpBtn from "../HelpBtn"

const Home = () => {
  return (
    <div>
      <SectionHeader title="Wybierz sekcję do edycji" />
      <Dashboard />
      <HelpBtn />
    </div>
  )
}

export default Home

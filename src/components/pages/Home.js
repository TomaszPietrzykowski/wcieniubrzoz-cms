import React from "react"

import { NavContext } from "../../context/NavContext"
import SectionHeader from "../ui/SectionHeader"
import Dashboard from "../dashboard/Dashboard"
import HelpBtn from "../ui/HelpBtn"

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

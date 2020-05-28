import React from "react"

import SectionHeader from "../ui/SectionHeader"
import Dashboard from "../dashboard/Dashboard"
import HelpBtn from "../ui/HelpBtn"
import AdminBtn from "../admin/AdminBtn"

const Home = () => {
  return (
    <div>
      <AdminBtn />
      <SectionHeader title="Wybierz sekcję do edycji" />
      <Dashboard />
      <HelpBtn />
    </div>
  )
}

export default Home

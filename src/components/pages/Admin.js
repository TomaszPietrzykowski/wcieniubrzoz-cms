import React from "react"

import SectionHeader from "../ui/SectionHeader"
import HomeBtn from "../ui/HomeBtn"
import AdminDashboard from "../admin/AdminDashboard"

const Admin = () => {
  return (
    <div>
      <SectionHeader title="Administracja" />
      <AdminDashboard />
      <HomeBtn />
    </div>
  )
}

export default Admin

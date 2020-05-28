import React from "react"

import SectionHeader from "../ui/SectionHeader"
import AdminDashboard from "../admin/AdminDashboard"

const Admin = () => {
  return (
    <div>
      <SectionHeader title="Administracja" />
      <AdminDashboard />
    </div>
  )
}

export default Admin

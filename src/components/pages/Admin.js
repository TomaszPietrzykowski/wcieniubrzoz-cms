import React from "react"

import SectionHeader from "../ui/SectionHeader"
import HomeBtn from "../ui/HomeBtn"
import PanelFTP from "../admin/PanelFTP"

const Admin = () => {
  return (
    <div>
      <SectionHeader title="Zarządzaj serwerem FTP" />
      <PanelFTP />
      <HomeBtn />
    </div>
  )
}

export default Admin

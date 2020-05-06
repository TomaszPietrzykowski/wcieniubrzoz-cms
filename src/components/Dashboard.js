import React from "react"

import DashboardTab from "./DashboardTab"

const Dashboard = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        <DashboardTab img="" title="" description="" add="" edit="" />
        <DashboardTab />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <DashboardTab />
        <DashboardTab />
      </div>
    </div>
  )
}

export default Dashboard

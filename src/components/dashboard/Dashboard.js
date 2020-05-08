import React, { Fragment } from "react"

import DashboardTab from "./DashboardTab"

const Dashboard = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "8rem",
          marginBottom: "7rem",
        }}
      >
        <DashboardTab
          img="cleome.jpg"
          title="Legendy o kwiatach"
          description="Dodaj nową legendę. Edytuj lub usuń istniejącą. Mozesz też zmienić
            grafikę ikony wyświtlanej przy legendzie"
          add="addlegend"
          edit="legends"
        />
        <DashboardTab
          img="irys.jpg"
          title="Porady"
          description="Edytuj sekcję: Porady Ogrodnika. Dodaj nową poradę, edytuj lub usuń istniejącą"
          add="addtip"
          edit="tips"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      >
        <DashboardTab
          img="len.jpg"
          title="Ciekawostki"
          description="Edytuj sekcję: Czy wiesz ze... Dodaj nową ciekawostke ze świata roślin, edytuj lub usuń istniejącą"
          add="addfunfact"
          edit="funfacts"
        />
        <DashboardTab
          img="słonecznik.jpg"
          title="Galeria"
          description="Załaduj nowe zdjecia do galerii lub usuń istniejace. Organizuj podgalerie"
          add="addtogallery"
          edit="gallery"
        />
      </div>
    </Fragment>
  )
}

export default Dashboard

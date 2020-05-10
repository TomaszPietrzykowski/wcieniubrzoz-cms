import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"

import DashboardTab from "./DashboardTab"

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: "8rem",
    marginBottom: "7rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "0",
      marginTop: "0",
    },
  },
}))

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.cardsContainer}>
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
      <div className={classes.cardsContainer}>
        <DashboardTab
          img="len.jpg"
          title="Ciekawostki"
          description="Edytuj sekcję: Czy wiesz ze... Dodaj nową ciekawostkę ze świata roślin, edytuj lub usuń istniejącą"
          add="addfunfact"
          edit="funfacts"
        />
        <DashboardTab
          img="slonecznik.jpg"
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

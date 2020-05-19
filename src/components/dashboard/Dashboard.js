import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import DashboardTab from "./DashboardTab"

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    height: "100%",
    paddingBottom: "2rem",
  },
  gridContainer: {
    marginTop: "6rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3rem",
    },
  },
}))

const Dashboard = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <Grid
      container
      justify="center"
      spacing={matches ? 8 : 2}
      className={classes.gridContainer}
    >
      <Grid item md={6} sm={12}>
        <Grid container justify="center" className={classes.cardsContainer}>
          <DashboardTab
            img="cleome.jpg"
            title="Legendy o kwiatach"
            description="Dodaj nową legendę. Edytuj lub usuń istniejącą. Mozesz też zmienić
            grafikę ikony wyświtlanej przy legendzie"
            add="addlegend"
            edit="legends"
          />
        </Grid>
      </Grid>
      <Grid item md={6} sm={12}>
        <Grid container justify="center" className={classes.cardsContainer}>
          <DashboardTab
            img="irys.jpg"
            title="Porady"
            description="Edytuj sekcję: Porady Ogrodnika. Dodaj nową poradę, edytuj lub usuń istniejącą"
            add="addtip"
            edit="tips"
          />
        </Grid>
      </Grid>
      <Grid item md={6} sm={12}>
        <Grid container justify="center" className={classes.cardsContainer}>
          <DashboardTab
            img="len.jpg"
            title="Ciekawostki"
            description="Edytuj sekcję: Czy wiesz ze... Dodaj nową ciekawostkę ze świata roślin, edytuj lub usuń istniejącą"
            add="addfunfact"
            edit="funfacts"
          />
        </Grid>
      </Grid>
      <Grid item md={6} sm={12}>
        <Grid container justify="center" className={classes.cardsContainer}>
          <DashboardTab
            img="slonecznik.jpg"
            title="Galeria"
            description="Załaduj nowe zdjecia do galerii lub usuń istniejace. Organizuj podgalerie"
            add="addtogallery"
            edit="gallery"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashboard

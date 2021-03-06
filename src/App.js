import React, { useContext, useEffect } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"

import { AuthContext } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import theme from "./components/Theme"
import Header from "./components/ui/Header"
import UserPanel from "./components/ui/UserPanel"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import Legends from "./components/pages/Legends"
import AddLegend from "./components/pages/AddLegend"
import Tips from "./components/pages/Tips"
import AddTip from "./components/pages/AddTip"
import Funfacts from "./components/pages/Funfacts"
import AddFunfact from "./components/pages/AddFunfact"
import Gallery from "./components/pages/Gallery"
import AddGallery from "./components/pages/AddGallery"
import NotFound from "./components/pages/NotFound"
import Help from "./components/pages/Help"
import Admin from "./components/pages/Admin"
import Footer from "./components/ui/Footer"
import ScrollToTop from "./components/ScrollToTop"
import FloatButton from "./components/FloatButton"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "920px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
}))

function App() {
  const { isLoggedIn, loggedInUser, logIn, setUser } = useContext(AuthContext)
  const classes = useStyles()

  useEffect(() => {
    const user = localStorage.getItem("currentUser")
    if (user) {
      setUser(JSON.parse(user))
      logIn()
    }
  }, [setUser, logIn])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <div className={classes.container}>
            {isLoggedIn && <UserPanel user={loggedInUser} />}
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/legends" component={Legends} />
              <ProtectedRoute exact path="/addlegend" component={AddLegend} />
              <ProtectedRoute exact path="/tips" component={Tips} />
              <ProtectedRoute exact path="/addtip" component={AddTip} />
              <ProtectedRoute exact path="/funfacts" component={Funfacts} />
              <ProtectedRoute exact path="/addfunfact" component={AddFunfact} />
              <ProtectedRoute exact path="/gallery" component={Gallery} />
              <ProtectedRoute exact path="/addgallery" component={AddGallery} />
              <ProtectedRoute exact path="/help" component={Help} />
              <ProtectedRoute exact path="/admin" component={Admin} />
              <Route
                exact
                path="/login"
                component={isLoggedIn ? Home : Login}
              />
              <Route exact path="/*" component={NotFound} />
            </Switch>
          </div>
          <FloatButton />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import React, { useContext } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { AuthContext } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import theme from "./components/Theme"
import Header from "./components/Header"
import UserPanel from "./components/UserPanel"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import Legends from "./components/pages/Legends"
import Tips from "./components/pages/Tips"
import Funfacts from "./components/pages/Funfacts"
import Gallery from "./components/pages/Gallery"
import NotFound from "./components/pages/NotFound"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const { isLoggedIn, loggedInUser } = useContext(AuthContext)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <div style={{ maxWidth: "960px", margin: "auto" }}>
            {isLoggedIn && <UserPanel user={loggedInUser} />}
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/legends" component={Legends} />
              <ProtectedRoute exact path="/tips" component={Tips} />
              <ProtectedRoute exact path="/funfacts" component={Funfacts} />
              <ProtectedRoute exact path="/Gallery" component={Gallery} />
              <Route
                exact
                path="/login"
                component={isLoggedIn ? Home : Login}
              />
              <Route exact path="/*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AuthContexProvider from "./context/AuthContext"

import ProtectedRoute from "./components/ProtectedRoute"
import theme from "./components/Theme"
import Header from "./components/Header"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import Legends from "./components/pages/Legends"
import Tips from "./components/pages/Tips"
import Funfacts from "./components/pages/Funfacts"
import Gallery from "./components/pages/Gallery"
import NotFound from "./components/pages/NotFound"
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthContexProvider>
          <Header />
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/legends" component={Legends} />
            <ProtectedRoute exact path="/tips" component={Tips} />
            <ProtectedRoute exact path="/funfacts" component={Funfacts} />
            <ProtectedRoute exact path="/Gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="*" component={NotFound} />
          </Switch>
          <Footer />
        </AuthContexProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

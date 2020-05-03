import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import theme from "./components/Theme"
import Header from "./components/Header"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import Legends from "./components/pages/Legends"
import Tips from "./components/pages/Tips"
import Funfacts from "./components/pages/Funfacts"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/legends" component={Legends} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tips" component={Tips} />
          <Route exact path="/funfacts" component={Funfacts} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

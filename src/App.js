import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"

import theme from "./components/Theme"
import Header from "./components/Header"
import Lorem from "./components/Lorem"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h1>App.js</h1>
      <Lorem vol={36} />
    </ThemeProvider>
  )
}

export default App

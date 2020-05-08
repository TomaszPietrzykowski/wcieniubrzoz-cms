import React from "react"
import ReactDOM from "react-dom"
import AuthContexProvider from "./context/AuthContext"
import NavContexProvider from "./context/NavContext"
import App from "./App"

ReactDOM.render(
  <AuthContexProvider>
    <NavContexProvider>
      <App />
    </NavContexProvider>
  </AuthContexProvider>,
  document.getElementById("root")
)

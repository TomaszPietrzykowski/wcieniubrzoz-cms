import React from "react"
import ReactDOM from "react-dom"
import AuthContexProvider from "./context/AuthContext"
import App from "./App"

ReactDOM.render(
  <AuthContexProvider>
    <App />
  </AuthContexProvider>,
  document.getElementById("root")
)

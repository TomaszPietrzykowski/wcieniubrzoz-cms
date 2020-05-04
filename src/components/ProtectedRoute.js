import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { AuthContext } from "../context/AuthContext"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute

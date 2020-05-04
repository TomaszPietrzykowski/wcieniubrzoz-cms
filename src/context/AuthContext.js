import React, { Component, createContext } from "react"

export const AuthContext = createContext()

class AuthContexProvider extends Component {
  state = {
    isLoggedIn: true,
    loggedInUser: {},
  }
  logIn = () => {
    this.setState({ isLoggedIn: true })
  }
  logOut = () => {
    this.setState({ isLoggedIn: false })
  }
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, logIn: this.logIn, logOut: this.logOut }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContexProvider

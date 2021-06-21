import React, { Component, createContext } from "react"

export const AuthContext = createContext()

class AuthContexProvider extends Component {
  state = {
    isLoggedIn: false,
    loggedInUser: {},
  }
  logIn = () => {
    this.setState({ isLoggedIn: true })
  }
  logOut = () => {
    this.setState({ isLoggedIn: false, loggedInUser: {} })
    localStorage.removeItem("currentUser")
  }
  setUser = (user) => {
    this.setState({ loggedInUser: user })
  }
  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          setUser: this.setUser,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContexProvider

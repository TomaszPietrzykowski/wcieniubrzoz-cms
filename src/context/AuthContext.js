import React, { Component, createContext } from "react"

export const AuthContext = createContext()

class AuthContexProvider extends Component {
  state = {
    isLoggedIn: false,
    loggedInUser: {},
    users: [
      {
        name: "Dana",
        login: "dan23",
        password: "marmaris14",
        avatar: "avatar1.jpg",
      },
      {
        name: "Kuba",
        login: "mentalmesh",
        password: "tranzystor86",
        avatar: "avatar2.jpg",
      },
      {
        name: "Tomek",
        login: "barracuda",
        password: "ProgramistaJS",
        avatar: "avatar3.jpg",
      },
    ],
  }
  logIn = () => {
    this.setState({ isLoggedIn: true })
  }
  logOut = () => {
    this.setState({ isLoggedIn: false, loggedInUser: {} })
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

import React, { Component, createContext } from "react"

export const NavContext = createContext()

class NavContexProvider extends Component {
  state = {
    trigger: false,
  }
  runTrigger = () => {
    this.setState({ trigger: !this.state.trigger })
  }
  render() {
    return (
      <NavContext.Provider
        value={{
          ...this.state,
          runTrigger: this.runTrigger,
        }}
      >
        {this.props.children}
      </NavContext.Provider>
    )
  }
}

export default NavContexProvider

import React from "react"

import spinner from "../../assets/spinner.svg"

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "35vh",
      }}
    >
      <img
        src={spinner}
        alt="loader"
        style={{
          height: "120px",
          margin: "2rem",
        }}
      />
    </div>
  )
}

export default Loader

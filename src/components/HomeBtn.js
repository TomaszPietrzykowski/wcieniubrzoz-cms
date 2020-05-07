import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

const HomeBtn = () => {
  return (
    <div
      style={{
        height: "6rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        style={{
          fontFamily: "Raleway",
          fontSize: "1.4rem",
          fontWeight: "700",
          textTransform: "none",
          borderRadius: "30px",
          padding: "0.3rem 1.5rem",
        }}
        component={Link}
        to="/"
      >
        Strona główna
      </Button>
    </div>
  )
}

export default HomeBtn

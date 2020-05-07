import { createMuiTheme } from "@material-ui/core/styles"

const blue01 = "rgba(0, 73, 188, 1)"
const contrast = "rgba(249, 225, 40, 1)"

const theme = createMuiTheme({
  palette: {
    common: {
      blue01: `${blue01}`,
      gradient1:
        "linear-gradient(149deg,rgba(5,252,216,1)0%,rgba(0,73,188,1)48%,rgba(159,4,109,1)100%);",
      gradient2:
        "linear-gradient(149deg, rgba(151,252,5,1) 1%, rgba(5,252,25,1) 10%, rgba(0,188,180,1) 100%)",
      gradient3:
        "linear-gradient(149deg, rgba(0,255,55,1) 0%, rgba(0,65,255,1) 99%)",
      gradient4:
        "linear-gradient(149deg, rgba(0,255,55,1) 0%, rgba(0,159,255,1) 99%)",
    },
    primary: {
      main: `${blue01}`,
    },
    secondary: {
      main: `${contrast}`,
    },
    sectionHeader: {
      color: "#777",
    },
  },
  typography: {
    logotext: {},
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    logout: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "0.9rem",
      textTransform: "none",
      height: "45px",
      color: "#FFFFFF",
    },
    sectionHeader: {
      textAlign: "center",
      color: "#777",
      fontFamily: "Raleway",
    },
  },
  status: {
    danger: "orange",
  },
})

export default theme

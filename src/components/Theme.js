import { createMuiTheme } from "@material-ui/core/styles"

const blue01 = "rgba(0, 73, 188, 1)"
const contrast = "rgba(249, 225, 40, 1)"

const theme = createMuiTheme({
  palette: {
    common: {
      blue01: `${blue01}`,
    },
    primary: {
      main: `${blue01}`,
    },
    secondary: {
      main: `${contrast}`,
    },
  },
  typography: {
    logotext: {
      fontSize: "2.5rem",
      fontFamily: "Roboto",
      fontWeight: 700,
      letterSpacing: 6,
    },
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
  },
  status: {
    danger: "orange",
  },
})

export default theme

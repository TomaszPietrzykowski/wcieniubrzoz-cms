import { createMuiTheme } from "@material-ui/core/styles"

const green01 = "rgba(0, 110, 0, 1)"
const contrast = "rgba(255, 153, 0, 1)"

const theme = createMuiTheme({
  palette: {
    common: {
      green01: `${green01}`,
    },
    primary: {
      main: `${green01}`,
    },
    secondary: {
      main: `${contrast}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
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

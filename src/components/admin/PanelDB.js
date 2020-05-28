import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  tableContainer: {
    marginTop: "4rem",
  },
  table: {
    width: "100%",
  },
  tableHeader: {
    backgroundColor: "rgba(83, 198, 140, 1)",
    fontFamily: "Raleway",
    fontSize: "1.3rem",
    fontWeight: "700",
    letterSpacing: 1,
    color: "#fff",
  },
  tableSubheader: {
    backgroundColor: "rgba(83, 198, 140, 0.05)",
    fontSize: "1rem",
    fontWeight: "700",
    color: "rgba(83, 198, 140, 1)",
  },
})

const PanelDB = ({
  legendsCount,
  tipsCount,
  funfactsCount,
  galleriesCount,
}) => {
  const classes = useStyles()

  function createData(name, value) {
    return { name, value }
  }

  const rows = [
    createData("Legendy:", legendsCount),
    createData("Porady:", tipsCount),
    createData("Ciekawostki:", funfactsCount),
    createData("Galerie:", galleriesCount),
  ]

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader}>Baza danych</TableCell>
              <TableCell
                align="right"
                className={classes.tableHeader}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
            <TableRow key="Wszystkie dokumenty w bazie:">
              <TableCell
                component="th"
                scope="row"
                className={classes.tableSubheader}
              >
                Wszystkie dokumenty w bazie:
              </TableCell>
              <TableCell align="right" className={classes.tableSubheader}>
                {legendsCount + tipsCount + funfactsCount + galleriesCount}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PanelDB

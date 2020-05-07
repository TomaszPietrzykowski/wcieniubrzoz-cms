import React, { Fragment } from "react"

import DisplayLegendCard from "./DisplayLegendCard"

const DisplayLegendList = ({ legends }) => {
  return (
    <Fragment>
      {legends.map((legend) => {
        const description = legend.content.join(" ")
        return <DisplayLegendCard title={legend.title} content={description} />
      })}
    </Fragment>
  )
}

export default DisplayLegendList

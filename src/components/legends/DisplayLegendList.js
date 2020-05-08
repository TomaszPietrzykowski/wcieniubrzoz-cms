import React, { Fragment } from "react"

import DisplayLegendCard from "./DisplayLegendCard"
import LegendListBtns from "./LegendListBtns"

const DisplayLegendList = ({ legends, setEditedLegend, setActiveTab }) => {
  const handleClick = (id) => {
    const edited = legends.filter((l) => l._id === id)[0]
    if (edited) {
      setEditedLegend(edited)
      window.scrollTo(0, 0)
      setActiveTab("edit")
    }
    return
  }

  const arr = legends.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  )

  return (
    <Fragment>
      <LegendListBtns />
      {arr.map((legend, i) => {
        const description = legend.content.join(" ")
        const rand = i < 10 ? i : parseInt(i / 10)
        return (
          <DisplayLegendCard
            key={legend._id}
            id={legend._id}
            title={legend.title}
            content={description}
            handleClick={handleClick}
            rand={rand}
          />
        )
      })}
    </Fragment>
  )
}

export default DisplayLegendList

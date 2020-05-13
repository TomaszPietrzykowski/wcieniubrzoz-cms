import React, { Fragment } from "react"

import DisplayFunfactCard from "./DisplayFunfactCard"
import FunfactListBtns from "./FunfactListBtns"

const DisplayFunfactList = ({ funfacts, setEditedFunfact, setActiveTab }) => {
  const handleClick = (id) => {
    const edited = funfacts.filter((l) => l._id === id)[0]
    if (edited) {
      setEditedFunfact(edited)
      window.scrollTo(0, 0)
      setActiveTab("edit")
    }
    return
  }

  const arr = funfacts.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  )

  return (
    <Fragment>
      <FunfactListBtns />
      {arr.map((ff, i) => {
        const description = ff.content.join(" ")
        return (
          <DisplayFunfactCard
            key={ff._id}
            id={ff._id}
            title={ff.title}
            content={description}
            handleClick={handleClick}
            img={ff.image}
          />
        )
      })}
    </Fragment>
  )
}

export default DisplayFunfactList

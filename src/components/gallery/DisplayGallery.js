import React, { Fragment } from "react"

import DisplayCollectionTile from "./DisplayCollectionTile"
import GalleryBtns from "./GalleryBtns"

const DisplayGallery = ({ tips, setEditedTip, setActiveTab }) => {
  const handleClick = (id) => {
    const edited = tips.filter((l) => l._id === id)[0]
    if (edited) {
      setEditedTip(edited)
      window.scrollTo(0, 0)
      setActiveTab("edit")
    }
    return
  }

  const arr = tips.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  )

  return (
    <Fragment>
      <GalleryBtns />
      {arr.map((tip, i) => {
        const description = tip.content.join(" ")
        return (
          <DisplayCollectionTile
            key={tip._id}
            id={tip._id}
            title={tip.title}
            content={description}
            handleClick={handleClick}
            img={tip.image}
          />
        )
      })}
    </Fragment>
  )
}

export default DisplayGallery

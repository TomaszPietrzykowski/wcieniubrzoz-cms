import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"

import DisplayCollectionTile from "./DisplayCollectionTile"
import GalleryBtns from "./GalleryBtns"

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "5rem",
    marginTop: "5rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: "3rem",
      marginTop: "1rem",
      marginBottom: "3rem",
    },
  },
}))

const DisplayGallery = ({ gallery, setEditedCollection, setActiveTab }) => {
  const classes = useStyles()

  const handleClick = (id) => {
    const edited = gallery.filter((l) => l._id === id)[0]
    if (edited) {
      setEditedCollection(edited)
      window.scrollTo(0, 0)
      setActiveTab("edit")
    }
    return
  }

  const arr = gallery.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  )

  return (
    <Fragment>
      <GalleryBtns />
      <div className={classes.galleryContainer}>
        {arr.map((collection, i) => {
          const description =
            collection.description.join(" ").slice(0, 140) + "(...)"
          return (
            <DisplayCollectionTile
              key={collection._id}
              id={collection._id}
              title={collection.title}
              description={description}
              handleClick={handleClick}
              images={collection.images}
            />
          )
        })}
      </div>
    </Fragment>
  )
}

export default DisplayGallery

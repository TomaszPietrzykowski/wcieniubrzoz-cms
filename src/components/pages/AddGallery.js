import React, { useState, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import AddGalleryForm from "../gallery/AddGalleryForm"
import HelpBtn from "../ui/HelpBtn"
import Loader from "../ui/Loader"

const AddGallery = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <SectionHeader title="Dodaj nową kolekcję" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <AddGalleryForm setLoading={setLoading} />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default AddGallery

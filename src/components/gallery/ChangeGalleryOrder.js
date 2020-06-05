import React from "react"
import ExpandOrderChange from "./ExpandOrderChange"

const ChangeGalleryOrder = ({ setLoading, gallery, getGallery }) => {
  return (
    <div>
      <ExpandOrderChange
        gallery={gallery}
        setLoading={setLoading}
        getGallery={getGallery}
      />
    </div>
  )
}

export default ChangeGalleryOrder

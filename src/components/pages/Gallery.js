import React, { useState, useEffect, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import HelpBtn from "../ui/HelpBtn"
import DisplayGallery from "../gallery/DisplayGallery"
import EditCollection from "../gallery/EditCollection"
import ChangeGalleryOrder from "../gallery/ChangeGalleryOrder"
import Loader from "../ui/Loader"

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(false)
  const [editedCollection, setEditedCollection] = useState({})
  const [activeTab, setActiveTab] = useState("list")

  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = async () => {
    window.scroll(0, 0)
    setLoading(true)
    try {
      const res = await fetch("https://gardens.barracudadev.com/api/v1/gallery")
      const data = await res.json()
      const downloaded = data.data
      setGallery(downloaded)

      setLoading(false)
    } catch (e) {
      if (e.response) {
        setLoading(false)
        window.alert(e.response.data.message)
      } else {
        window.alert(e)
        setLoading(false)
      }
    }
  }

  return (
    <div>
      <ChangeGalleryOrder
        gallery={gallery}
        setLoading={setLoading}
        getGallery={getGallery}
      />
      <SectionHeader
        title={activeTab === "edit" ? "Edytuj kolekcję" : "Galeria"}
      />
      {loading ? (
        <Loader />
      ) : activeTab === "edit" ? (
        <EditCollection
          collection={editedCollection}
          setEditedCollection={setEditedCollection}
          setActiveTab={setActiveTab}
          getGallery={getGallery}
          setLoading={setLoading}
        />
      ) : (
        <Fragment>
          <DisplayGallery
            gallery={gallery}
            setEditedCollection={setEditedCollection}
            setActiveTab={setActiveTab}
          />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default Gallery

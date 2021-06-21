import React, { useState, useEffect, Fragment, useContext } from "react"
import axios from "axios"

import SectionHeader from "../ui/SectionHeader"
import HelpBtn from "../ui/HelpBtn"
import DisplayGallery from "../gallery/DisplayGallery"
import EditCollection from "../gallery/EditCollection"
import ChangeGalleryOrder from "../gallery/ChangeGalleryOrder"
import Loader from "../ui/Loader"
import { AuthContext } from "../../context/AuthContext"

const Gallery = () => {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(false)
  const [editedCollection, setEditedCollection] = useState({})
  const [activeTab, setActiveTab] = useState("list")
  const { loggedInUser } = useContext(AuthContext)

  const getGallery = async () => {
    window.scroll(0, 0)
    setLoading(true)
    try {
      const token = loggedInUser.token
      const config = { headers: { Authorization: `Bearer ${token}` } }
      const data = await axios.get(
        `https://gardens.barracudadev.com/api/v1/gallery`,
        config
      )
      const downloaded = data.data.data
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

  useEffect(() => {
    getGallery()
    // eslint-disable-next-line
  }, [])

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

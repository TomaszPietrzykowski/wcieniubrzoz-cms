import React, { useState, useEffect, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import HelpBtn from "../ui/HelpBtn"
import DisplayFunfactList from "../funfacts/DisplayFunfactList"
import EditFunfact from "../funfacts/EditFunfact"
import Loader from "../ui/Loader"

const Funfacts = () => {
  const [funfacts, setFunfacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [editedFunfact, setEditedFunfact] = useState({})
  const [activeTab, setActiveTab] = useState("list")

  useEffect(() => {
    getFunfacts()
  }, [])

  const getFunfacts = async () => {
    window.scroll(0, 0)
    setLoading(true)
    try {
      const res = await fetch(
        "https://gardens.barracudadev.com/api/v1/funfacts"
      )
      const data = await res.json()
      const downloaded = data.data
      setFunfacts(downloaded)

      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <SectionHeader
        title={activeTab === "edit" ? "Edytuj ciekawostkę" : "Czy wiesz, że..."}
      />
      {loading ? (
        <Loader />
      ) : activeTab === "edit" ? (
        <EditFunfact
          funfact={editedFunfact}
          setEditedFunfact={setEditedFunfact}
          setActiveTab={setActiveTab}
          getFunfacts={getFunfacts}
          setLoading={setLoading}
        />
      ) : (
        <Fragment>
          <DisplayFunfactList
            funfacts={funfacts}
            setEditedFunfact={setEditedFunfact}
            setActiveTab={setActiveTab}
          />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default Funfacts

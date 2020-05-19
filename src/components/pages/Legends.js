import React, { useState, useEffect, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import HelpBtn from "../ui/HelpBtn"
import DisplayLegendList from "../legends/DisplayLegendList"
import EditLegend from "../legends/EditLegend"
import Loader from "../ui/Loader"

const Legends = () => {
  const [legends, setLegends] = useState([])
  const [loading, setLoading] = useState(false)
  const [editedLegend, setEditedLegend] = useState({})
  const [activeTab, setActiveTab] = useState("list")

  useEffect(() => {
    getLegends()
  }, [])

  const getLegends = async () => {
    window.scroll(0, 0)
    setLoading(true)
    try {
      const res = await fetch("https://gardens.barracudadev.com/api/v1/legends")
      const data = await res.json()
      const downloaded = data.data
      setLegends(downloaded)

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
      <SectionHeader
        title={activeTab === "edit" ? "Edytuj legendę" : "Legendy o kwiatach"}
      />
      {loading ? (
        <Loader />
      ) : activeTab === "edit" ? (
        <EditLegend
          legend={editedLegend}
          setEditedLegend={setEditedLegend}
          setActiveTab={setActiveTab}
          getLegends={getLegends}
          setLoading={setLoading}
        />
      ) : (
        <Fragment>
          <DisplayLegendList
            legends={legends}
            setEditedLegend={setEditedLegend}
            setActiveTab={setActiveTab}
          />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default Legends

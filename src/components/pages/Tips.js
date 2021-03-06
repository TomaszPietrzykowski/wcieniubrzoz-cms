import React, { useState, useEffect, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import HelpBtn from "../ui/HelpBtn"
import DisplayTipList from "../tips/DisplayTipList"
import EditTip from "../tips/EditTip"
import Loader from "../ui/Loader"

const Tips = () => {
  const [tips, setTips] = useState([])
  const [loading, setLoading] = useState(false)
  const [editedTip, setEditedTip] = useState({})
  const [activeTab, setActiveTab] = useState("list")

  useEffect(() => {
    getTips()
  }, [])

  const getTips = async () => {
    window.scroll(0, 0)
    setLoading(true)
    try {
      const res = await fetch("https://gardens.barracudadev.com/api/v1/tips")
      const data = await res.json()
      const downloaded = data.data
      setTips(downloaded)

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
        title={activeTab === "edit" ? "Edytuj poradę" : "Porady Ogrodnika"}
      />
      {loading ? (
        <Loader />
      ) : activeTab === "edit" ? (
        <EditTip
          tip={editedTip}
          setEditedTip={setEditedTip}
          setActiveTab={setActiveTab}
          getTips={getTips}
          setLoading={setLoading}
        />
      ) : (
        <Fragment>
          <DisplayTipList
            tips={tips}
            setEditedTip={setEditedTip}
            setActiveTab={setActiveTab}
          />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default Tips

import React, { useState, useEffect, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import HelpBtn from "../ui/HelpBtn"
import DisplayTipList from "../legends/DisplayTipList"
import EditTip from "../legends/EditTip"
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
      const res = await fetch("https://barracudadev.com/api/v1/legends")
      const data = await res.json()
      const downloaded = data.data
      setTips(downloaded)

      setLoading(false)
    } catch (err) {
      console.log(err)
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

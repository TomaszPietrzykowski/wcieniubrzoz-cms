import React, { useState, useEffect, Fragment } from "react"

import SectionHeader from "../SectionHeader"
import HelpBtn from "../HelpBtn"
import DisplayLegendList from "../DisplayLegendList"
import Loader from "../ui/Loader"

const Legends = () => {
  const [legends, setLegends] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLegends()
  }, [])

  const getLegends = async () => {
    setLoading(true)
    try {
      const res = await fetch("https://barracudadev.com/api/v1/legends")
      const data = await res.json()
      const downloaded = data.data
      setLegends(downloaded)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <SectionHeader title="Legendy o kwiatach" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <DisplayLegendList legends={legends} />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default Legends

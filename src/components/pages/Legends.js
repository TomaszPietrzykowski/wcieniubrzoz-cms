import React, { useState, useEffect } from "react"

import SectionHeader from "../SectionHeader"
import DisplayLegendList from "../DisplayLegendList"

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
      {loading ? <h1>loading...</h1> : <DisplayLegendList legends={legends} />}
    </div>
  )
}

export default Legends

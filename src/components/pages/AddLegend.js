import React, { useState, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import HelpBtn from "../ui/HelpBtn"
import Loader from "../ui/Loader"

const AddLegend = () => {
  const [loading, setLoading] = useState(false)
  const [newLegend, setNewLegend] = useState({})
  const [activeStep, setActiveStep] = useState(0)

  // POST REQUEST HERE
  //   const sendLegend = async () => {
  //     setLoading(true)
  //     try {
  //       const res = await fetch("https://barracudadev.com/api/v1/legends")
  //       const data = await res.json()
  //       const downloaded = data.data
  //       setLegends(downloaded)
  //       setLoading(false)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  return (
    <div>
      <SectionHeader
        title={
          activeStep === 1
            ? "Potwierdz"
            : activeStep === 2
            ? "Sukces"
            : "Dodaj nową legendę"
        }
      />
      {loading ? (
        <Loader />
      ) : activeStep === 1 ? (
        <h1>READ AGAIN</h1>
      ) : activeStep === 2 ? (
        <h1>SUCCESS</h1>
      ) : (
        <Fragment>
          <h1>CREATE</h1>
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default AddLegend

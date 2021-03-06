import React, { useState, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import AddLegendForm from "../legends/AddLegendForm"
import HelpBtn from "../ui/HelpBtn"
import Loader from "../ui/Loader"

const AddLegend = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <SectionHeader title="Dodaj nową legendę" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <AddLegendForm setLoading={setLoading} />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default AddLegend

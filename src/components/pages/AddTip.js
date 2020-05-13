import React, { useState, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import AddTipForm from "../tips/AddTipForm"
import HelpBtn from "../ui/HelpBtn"
import Loader from "../ui/Loader"

const AddTip = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <SectionHeader title="Dodaj nową poradę" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <AddTipForm setLoading={setLoading} />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default AddTip

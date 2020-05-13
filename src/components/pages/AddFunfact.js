import React, { useState, Fragment } from "react"

import SectionHeader from "../ui/SectionHeader"
import AddFunfactForm from "../funfacts/AddFunfactForm"
import HelpBtn from "../ui/HelpBtn"
import Loader from "../ui/Loader"

const AddFunfact = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <SectionHeader title="Dodaj nową ciekawostkę" />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <AddFunfactForm setLoading={setLoading} />
          <HelpBtn />
        </Fragment>
      )}
    </div>
  )
}

export default AddFunfact

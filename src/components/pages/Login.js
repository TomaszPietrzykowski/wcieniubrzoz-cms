import React, { useState } from "react"
import Loader from "../ui/Loader"

import SectionHeader from "../ui/SectionHeader"
import LoginForm from "../LoginForm"

const Login = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div style={{ marginBottom: "20vh" }}>
      <SectionHeader title="Zaloguj się" />
      {loading ? <Loader /> : <LoginForm setLoading={setLoading} />}
    </div>
  )
}

export default Login

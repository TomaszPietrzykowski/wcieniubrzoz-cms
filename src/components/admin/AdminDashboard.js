import React, { useState, useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

import PanelFTP from "./PanelFTP"
import PanelDB from "./PanelDB"
import Loader from "../ui/Loader"
import PanelNoRef from "./PanelNoRef"
import HomeBtn from "../ui/HomeBtn"
import RefreshDataBtn from "./RefreshDataBtn"

const AdminDashboard = () => {
  const [loadingFTP, setLoadingFTP] = useState(true)
  const [loadingDB, setLoadingDB] = useState(true)
  const [filesCount, setFilesCount] = useState(0)
  const [totalSize, setTotalSize] = useState("0 MB")
  const [legendsCount, setLegendsCount] = useState(0)
  const [tipsCount, setTipsCount] = useState(0)
  const [funfactsCount, setFunfactsCount] = useState(0)
  const [galleriesCount, setGalleriesCount] = useState(0)
  const [ftpTotal, setFtpTotal] = useState([])
  const [reload, setReload] = useState(true)

  const { loggedInUser } = useContext(AuthContext)

  useEffect(() => {
    getFTP()
    getDB()
  }, [reload])

  const getFTP = async () => {
    setLoadingFTP(true)
    try {
      const token = loggedInUser.token
      const config = { headers: { Authorization: `Bearer ${token}` } }
      const response = await axios.get(
        `https://gardens.barracudadev.com/api/v1/list_ftp`,
        config
      )

      const originalSize = await response.data.ftpSize
      const originalCount = await response.data.results
      const imagesArray = await response.data.data
      let size =
        originalSize > 1048576
          ? originalSize / 1048576
          : originalSize > 1024
          ? originalSize / 1024
          : originalSize

      let unit =
        originalSize > 1048576 ? "MB" : originalSize > 1024 ? "KB" : "bytes"
      setFilesCount(originalCount)
      setTotalSize(`${parseFloat(size).toFixed(2)} ${unit}`)
      setFtpTotal(imagesArray)
      setLoadingFTP(false)
    } catch (e) {
      if (e.response) {
        setLoadingFTP(false)
        window.alert(e.response.data.message)
      } else {
        window.alert(e)
        setLoadingFTP(false)
      }
    }
  }
  const getDB = async () => {
    setLoadingDB(true)
    try {
      const token = loggedInUser.token
      const config = { headers: { Authorization: `Bearer ${token}` } }

      const gal = await axios.get(
        "https://gardens.barracudadev.com/api/v1/gallery",
        config
      )
      const galleryLength = await gal.data.data.length
      setGalleriesCount(galleryLength)

      const tip = await axios.get(
        "https://gardens.barracudadev.com/api/v1/tips",
        config
      )
      const tipsLength = await tip.data.data.length
      setTipsCount(tipsLength)

      const leg = await axios.get(
        "https://gardens.barracudadev.com/api/v1/legends",
        config
      )
      const legendsLength = await leg.data.data.length
      setLegendsCount(legendsLength)

      const ff = await axios.get(
        "https://gardens.barracudadev.com/api/v1/funfacts",
        config
      )
      const ffLength = await ff.data.data.length
      setFunfactsCount(ffLength)

      setLoadingDB(false)
    } catch (e) {
      if (e.response) {
        setLoadingDB(false)
        window.alert(e.response.data.message)
      } else {
        window.alert(e)
        setLoadingDB(false)
      }
    }
  }

  return loadingFTP || loadingDB ? (
    <Loader />
  ) : (
    <div>
      <RefreshDataBtn reload={reload} setReload={setReload} />
      <PanelFTP filesCount={filesCount} totalSize={totalSize} />
      <PanelDB
        legendsCount={legendsCount}
        tipsCount={tipsCount}
        funfactsCount={funfactsCount}
        galleriesCount={galleriesCount}
      />
      <PanelNoRef ftpTotal={ftpTotal} />
      <HomeBtn />
    </div>
  )
}

export default AdminDashboard

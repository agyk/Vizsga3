import React, { useEffect, useState } from "react"
import LoadingMask from'./components/LoadingMask.js'
const App = () => {

  const init = async () => {
    const response = await fetch("https://demoapi.com/api/series/howimetyourmother")
    const data = await response.json()
  }
  
  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      <LoadingMask/>
    </div>
  )
}

export default App

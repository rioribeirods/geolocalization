import React, { useState, useEffect } from 'react'
import style from "./App.module.css"

function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived)

    return () => navigator.geolocation.clearWatch(watchId)
  }, [])

  function handlePositionReceived ( {coords}) {
    const { latitude, longitude } = coords
    setLocation( {latitude, longitude })
  }

  return (

     <div className={style.box}>
        <p className={style.dado}>Latitude: {location.latitude}</p>
        <p className={style.dado}>Longitude: {location.longitude}</p>
     </div>
     
  )
}

export default App

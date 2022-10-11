import React from 'react'
import MapContext from '../components/map/MapContext'
import { useContext } from 'react'

const map = () => {
  const {map} = useContext(MapContext)

  return (
    <>
      <div id="map" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      </div>
    </>
  )
}

export default map
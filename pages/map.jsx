import React, { useContext } from 'react'
import MapContext from '../components/map/MapContext'

const map = () => {
    const { map } = useContext(MapContext)

    return (
      <>
        <div id="map" style={{ position: 'relative', width: '100%', height: '100vh' }}>
        </div>
      </>
    )
}

export default map
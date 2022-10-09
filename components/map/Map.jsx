import React, { useState, useEffect } from 'react'
import MapContext from './MapContext'
import 'ol/ol.css'
import { Map as OlMap, View } from 'ol'
import { defaults as defaultControls, FullScreen } from 'ol/control'
import { fromLonLat, get as getProjection } from 'ol/proj'
import { Tile as TileLayer } from 'ol/layer'
import { XYZ } from 'ol/source'
import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from 'ol/interaction'

const Map = ({ children }) => {
  const [mapObj, setMapObj] = useState({})

  useEffect(() => {
  //Map 객체 생성 및 vworld 지도 설정
    const map = new OlMap({
      controls: defaultControls({ zoom: false, rotate: false }).extend([
        new FullScreen(),
      ]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      layers: [
        new TileLayer({
          source: new XYZ({ //인증키는 vworld에서 발급 가능
            url: 'http://api.vworld.kr/req/wmts/1.0.0/FA92A59A-B342-3B1A-B4AB-B96B2E8487DB/Base/{z}/{y}/{x}.png',
          }),
        }),
      ],
      target: 'map',
      view: new View({
        projection: getProjection('EPSG:3857'),
        center: fromLonLat( 
          [126.9779228388393, 37.56643948208262], //[경도, 위도] 값 설정! 필자는 시청으로 설정
          getProjection('EPSG:3857')
        ),
        zoom: 15,
      }),
    })

    setMapObj({ map })
    return () => map.setTarget(undefined)
  }, [])

  return <MapContext.Provider value={mapObj}>{children}</MapContext.Provider>
}

export default Map
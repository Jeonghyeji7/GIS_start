
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import MapContext from '../components/map/MapContext'
import styles from '../styles/Home.module.css'

const Home = () => {
  // const {map} = useContext(MapContext)

  return (
    <>
    <Link href="/map"><a>지도로 이동</a></Link>
      {/* <div id="map" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      </div> */}
    </>
  )
}

export default Home

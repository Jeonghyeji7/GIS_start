import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Map from '../components/map/Map'


function MyApp({ Component, pageProps }: AppProps) {
  return <Map>
    <Component {...pageProps} />
  </Map>
}

export default MyApp

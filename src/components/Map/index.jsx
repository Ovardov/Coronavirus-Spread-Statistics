import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

function Map({ marker, getCountryData }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY, v: '3.32' }}
      defaultCenter={{ lat: 30, lng: 15 }}
      defaultZoom={1}
      center={marker ? { lat: marker.lat - 3.7, lng: marker.lng } : { lat: 30, lng: 15 }}
      zoom={marker ? 5 : 1}
      onGoogleApiLoaded={({ map, maps }) => setIsLoaded(true)}
      yesIWantToUseGoogleMapApiInternals
      onClick={getCountryData}
      options={{ gestureHandling: 'greedy', draggableCursor: 'pointer', zoomControl: false }}
    >
      {isLoaded && marker && <Marker lat={marker.lat} lng={marker.lng} marker={marker} />}
    </GoogleMapReact>
  )
}

export default Map

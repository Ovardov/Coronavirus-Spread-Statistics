import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

function Map({ marker, setMarker, getCountryData }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [map, setMap] = useState(null)
  const [maps, setMaps] = useState(null)

  const handleLoadedMap = (map, maps) => {
    setMap(map)
    setMaps(maps)
    setIsLoaded(true)
  }

  // useEffect(() => {
  //   if (map && maps && marker) {
  //     const bounds = new maps.LatLngBounds()

  //     const position = new maps.LatLng(marker.lat, marker.lng)
  //     bounds.extend(position)

  //     map.fitBounds(bounds)
  //   }
  // }, [marker, maps, map])

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY, v: '3.31' }}

      defaultCenter={{ lat: 30, lng: 0 }}
      defaultZoom={1}
      center={marker && { lat: marker.lat - 5, lng: marker.lng + 6 }}
      zoom={marker ? 5 : 1}
      onGoogleApiLoaded={({ map, maps }) => handleLoadedMap(map, maps)}
      yesIWantToUseGoogleMapApiInternals
      onClick={getCountryData}
      options={{ gestureHandling: 'greedy' }}
    >
      {isLoaded && marker && <Marker lat={marker.lat} lng={marker.lng} marker={marker} />}
    </GoogleMapReact>
  )
}

export default Map

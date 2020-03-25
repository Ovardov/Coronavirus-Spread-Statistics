import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

function Map({ marker, getCountryData }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [map, setMap] = useState(null)
  const [maps, setMaps] = useState(null)

  const handleLoadedMap = (map, maps) => {
    setIsLoaded(true)
    setMap(map)
    setMaps(maps)
  }

  // useEffect(() => {
  //   if (map && maps && marker) {
  //     // const bounds = new maps.LatLngBounds()

  //     // console.log(bounds)

  //     const position = new maps.LatLng(marker.lat, marker.lng)
  //     // bounds.extend(position)

  //     // console.log(position)

  //     map.fitBounds(bounds)
  //   }
  // }, [marker, maps, map])



  return (

    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY, v: '3.32' }}
      defaultCenter={{ lat: 30, lng: 15 }}
      defaultZoom={1}
      center={marker ? { lat: marker.lat, lng: marker.lng } : { lat: 30, lng: 15 }}
      zoom={marker ? 5 : 1}
      onGoogleApiLoaded={({ map, maps }) => handleLoadedMap(map, maps)}
      yesIWantToUseGoogleMapApiInternals
      onClick={getCountryData}
      options={{ gestureHandling: 'greedy', }}
    >
      {isLoaded && marker && <Marker lat={marker.lat} lng={marker.lng} marker={marker} />}
    </GoogleMapReact>
  )
}

export default Map

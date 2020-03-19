import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

function Map({marker, setMarker}) {
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


  const handleClick = props => {
    const { lat, lng } = props

    const newMarker = {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    }

    setMarker(newMarker)
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={{ lat: 30, lng: 0 }}
      defaultZoom={1}
      center={marker}
      // zoom={7}
      onGoogleApiLoaded={({ map, maps }) => handleLoadedMap(map, maps)}
      yesIWantToUseGoogleMapApiInternals
      onClick={handleClick}
    >
      {isLoaded && marker && <Marker lat={marker.lat} lng={marker.lng} />}
    </GoogleMapReact>
  )
}

export default Map

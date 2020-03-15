import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


const renderMarkers = (markers) => {
  return markers.map(({ latitude, longitude, name, country }) => {
    return (
      <Marker
        key={country}
        lat={latitude}
        lng={longitude}
        text={name}
      />
    )
  })
}


function Map({ markers }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);

  const handleLoadedMap = (map, maps) => {
    setMap(map);
    setMaps(maps)
    setIsLoaded(true) 
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
      defaultCenter={{ lat: 42.7219285, lng: 24.422234 }}
      defaultZoom={7}
      onGoogleApiLoaded={({ map, maps }) => handleLoadedMap(map, maps)}
      yesIWantToUseGoogleMapApiInternals
    >
      {isLoaded && markers.length > 0 && renderMarkers(markers)}

    </GoogleMapReact>
  )
}

export default Map
import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    return(
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: 'AIzaSyA6yjgj2IcEHPxKFXj7hcAb7K2mwHbY-rA' }}
          defaultCenter={{lat: 80, lng: -180}}
          defaultZoom={2}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
    )
}

export default Map
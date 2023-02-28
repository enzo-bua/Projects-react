import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function Map() {

  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4267261, lon: -99.1718796
  }
  

  return (
    <LoadScript googleMapsApiKey='AIzaSyB9A9TdNCtTr3ygSvkM4KdvyZrE-yt-FyA' >
      <GoogleMap
       mapContainerStyle={mapStyles}
       zoom={17}
       center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap> 
    </LoadScript>    
  )
}

export default Map
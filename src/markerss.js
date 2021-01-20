import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
let g

function Markerss({ a, b, c }) {
	g = "{[" + a + ", " + b + "]}"

  return (
    <Marker position={g}>
      <Popup>
        {c}
      </Popup>
    </Marker>
  )
}

export default Markerss
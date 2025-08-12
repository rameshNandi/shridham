"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default icon issues with Leaflet and Webpack/Next.js
// This is a common workaround for Leaflet's default icon paths
// when used in a modern build environment like Next.js.
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  })
}

interface MapProps {
  center: [number, number]
  hotels: { id: number; name: string; coordinates: [number, number]; price: number }[]
  zoom: number
}

export default function Map({ center, hotels, zoom }: MapProps) {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full w-full rounded-xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotels.map((hotel) => (
        <Marker key={hotel.id} position={hotel.coordinates}>
          <Popup>
            <div className="font-bold">{hotel.name}</div>
            <div>Starting from ₹{hotel.price.toLocaleString()}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

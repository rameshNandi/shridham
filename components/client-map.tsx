"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css" // Import Leaflet CSS here
import L from "leaflet" // Import Leaflet itself here

// Fix for default icon issues with Leaflet and Webpack/Next.js
// This ensures the default marker icons display correctly.
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  })
}

interface ClientMapProps {
  center: [number, number]
  hotels: { id: string; name: string; location: [number, number]; address: string }[]
  zoom: number
}

export default function ClientMap({ center, hotels, zoom }: ClientMapProps) {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-full w-full rounded-xl">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {hotels.map((hotel) => (
        <Marker key={hotel.id} position={hotel.location}>
          <Popup>
            <div className="text-sm">
              <strong>{hotel.name}</strong>
              <br />
              {hotel.address}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

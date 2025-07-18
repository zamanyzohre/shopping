"use client"

import { useEffect } from "react"
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'

export default function Map() {
   
 useEffect(() => {
        document.getElementById('contact-map').innerHTML = "<div id='map' style='height:300px'></div>"
       
        var map = L.map('map').setView([35.700105, 51.400394], 14);
        var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map);
        var marker = L.marker([36.4772254, 52.8690276], {
        // var marker = L.marker([35.700105, 51.400394], {
            icon: L.icon({
                popupAnchor: [12, 6],
                iconUrl: 'images/map/marker-icon.png',
                shadowUrl: 'images/map/marker-shadow.png'
            })
        }).addTo(map)
            .bindPopup('<b>Local</b>').openPopup();
    }, [])

  return (
   
        <div id="contact-map" style={{height:'300px'}}></div>
   
  )
}

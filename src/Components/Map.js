import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON ,Marker,Popup } from 'react-leaflet';
import L from 'leaflet';
import geojson1 from './geo.json';
import 'leaflet/dist/leaflet.css';
import './map.css'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl:require('leaflet/dist/images/marker-icon.png'),
  shadowUrl:require('leaflet/dist/images/marker-shadow.png')
});



  
const center = [49.850000000000,
  23.84152514611125];


function onEachFeature(feature, layer) {

    const N = feature.properties.Name
    const P = feature.properties.Place
    const A = feature.properties.Acres
    const D = feature.properties.Depth
    const T = feature.properties.Temp
    const We = feature.properties.Weather
    const W = feature.properties.Winds
    layer.bindPopup(`
    
    <div style="display: flex;justify-content: left;flex-direction: column;" >
      <h2 style="color: #228AB5;font-size:18px;margin-bottom:-4px;margin-bottom:6px;"> ${N}</h2>
      <h2 style="margin-bottom:2px;font-size:16px;color:black;">${P}</h2>
      <h2 style="margin-bottom:-1px;font-size:16px;color:black;">${A}</h2>
      <h2 style="margin-bottom:1px;margin-top:2px;color:black;font-size:16px;">${D}</div></h2>
      <h2 style="margin-bottom:-1px;color:black;">${T}</div></h2>
      <h2 style="margin-bottom:-1px;font-size:16px;color:black;">${We}</div></h2>
      <h2 style="font-size:16px;margin-bottom:10px;color:black;">${W}</div></h2>
      <button style="background-color:#34495E;color:white;padding-left:55px;padding-right:55px;" >More Info</button> 
      
    <div>
    `)
  

  

    
  }



const MapWrapper = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML = `click on polygon`;
      return div;
    };

    legend.addTo(map);

  }, [map]);

  return (
    <MapContainer
      whenCreated={setMap}
      center={center}
      zoom={8}
      scrollWheelZoom={false}
      
    >
       

<TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON data={geojson1} onEachFeature={onEachFeature} />
     
  
    
    </MapContainer>
  )
}

export default MapWrapper;
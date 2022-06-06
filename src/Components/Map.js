import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './map.css';
import icon from "./icon";
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet';
const MapWrapper = () => {
  const [items, setItems] = useState([]);
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 500);
    console.log('page to reload')
}
useEffect(() => {
    fetchItems();
  }, []);
const fetchItems = () => {
    axios
      .get('https://geodataproject.herokuapp.com/products/products/')
      .then((res) => {
        setItems(res.data);
        
      })  
  };
return (
    <MapContainer
      
      
    scrollWheelZoom={false}
    center={[49.80,24]} 
    zoom={10}
    
    
  >

    

   
   

<TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   
               {items.map((item) => (
                  <Marker
                  icon={icon}
                  key={item.id}
                  position={[item.lon, item.lat]}
                  >
                  <Popup > <div>
          <div class="water_wrapper" key={item.id}>
            <p class="my_water">{item.name}</p>

            <p class="water_items">Місце:{item.place}<br/>Площа:{item.square} <br/> 
            Глибина:{item.depth} <br/> </p>
             </div>
            <button class="water_button">
              <Link class="button_text" to={`/item/${item.id}`} state={{
    id : `${item.name}`,
    from: `${item.place}`
  }} onClick={refreshPage} ><p class="button_text">Детально</p> </Link></button>
            
          </div>
          </Popup>
          </Marker>
        ))}

  
  </MapContainer>
    
  );
};
export default MapWrapper;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
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
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
        
      })  
  };
  
  const data1 = {
    from: "Link #1",
    message: "Welcome to KindaCode.com",
    timestamp: Date.now(),
  };
  
return (
    <MapContainer
      
      
    scrollWheelZoom={false}
    center={[54,44]} 
    zoom={3}
    
    
  >

    

   
   

<TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   
               {items.map((item) => (
                  <Marker
                  icon={icon}
                  key={item.id}
                  position={[item.address.geo.lat, item.address.geo.lng]}
                  >
                  <Popup > 
          <div class="water_wrapper" key={item.id}>
            <p class="my_water">{item.username}</p>

            <p class="water_items">{item.name}<br/> {item.company.name} <br/> 
            {item.address.street}<br/> {item.address.suite} <br/> {item.phone}</p>
            
            <button class="water_button">
              <Link class="button_text" to={`/item/${item.id}`} state={{
    id : `${item.id}`,
    from: `${item.username}`
  }} onClick={refreshPage} ><p class="button_text">More Info</p> </Link></button>
            
          </div>
          </Popup>
          </Marker>
        ))}

  
  </MapContainer>
    
  );
};
export default MapWrapper;
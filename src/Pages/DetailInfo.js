import React, { useState, useEffect } from "react";
import './pages.css'
import Tabs from '../Components/Tabs'
import Panel from "../Components/Panel";
import MapWrapper from "../Components/Map";
import ReactSpeedometer from "react-d3-speedometer";
import { useLocation, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio:false,
  responsive: true,
  plugins: {
    legend: {
      labels: {
          color: "White",
          fontSize: 18
      }
  },
  
}}



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];








const Detail = ({ props }) => {
  
  const location = useLocation();
  const state = location.state;

  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  
  useEffect(() => {
    fetch(`https://geodataproject.herokuapp.com/api/v1/products/${state.id}/`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(response)
        
       
      })
      .catch((error) => console.log(error));
  }, []);
  const [tempf, setTempF] = useState("");
  const [weather, setWeather] = useState();
  const [isLoadingW, setIsLoadingW] = useState(true);
  
  
useEffect(() => {
  
  fetch(`https://api.weatherapi.com/v1/current.json?key=093841b1f8d04688a3d121951222305 &q=${state.from}&aqi=no`, {})
    .then((res) => res.json())
    .then((response) => {
      setWeather(response);
      setIsLoadingW(false);
     
     
    })
    .catch((error) => console.log(error));
}, []);

//   {!isLoading && (<>
//     {data.products.map(i =>{
//       const data1 = {
//         labels,
        
//         datasets: [
//           {
            
//             label: 'Nikcel',
//             data: `${i.stat2}`,
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//           },
//           {
//             label: 'Zinc',
//             data:`${i.stat1}`,
//             borderColor: 'rgb(153, 102, 6)',
//             backgroundColor: 'rgba(53, 162, 100, 0.5)',
//           },
//           {
//             label: 'Lead',
//             data:`${i.stat3}`,
//             borderColor: 'rgb(153, 262, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//           },
//           {
//             label: 'Magnesium',
            
//             data:`${i.stat4}`,
//             borderColor: 'rgb(153, 162, 235)',
//             backgroundColor: 'rgba(53, 162, 235, 0.5)',
//           },
//         ],
//       }
//     })}
//       </> 
//   )}
  return (
    <>


<MapWrapper/>
<div class="all_wrapper">
{!isLoading && (
<Tabs>
      <Panel title="Information">
      
        
       <>
       
        <div class="item_wrapper" >
       <div class="items_detail">
        <div class="item_in">
         
          <p class="item_detail"> {data.name}</p>
          <p class="item_detail">Place: {data.place}</p>
          </div>
          <div class="item_in">
          
          <p class="item_detail">Square: {data.square}</p>
          <p class="item_detail">Depth: {data.depth}</p>
          </div>
          <div class="item_in">
          
          <p class="item_detail">Type:{data.typez}</p>
          </div>
          </div>
          

          <div class="Sp_wrapper">
            <div class="float_speed">
            <div class="Speedometer">
            <div class="item_detail">Current Temperature</div>
            {!isLoadingW && (
            <div>
          <ReactSpeedometer 
       width={250}
        minValue={0}
        maxValue={120}
        segments={5}
        ringWidth={15}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value} °F "
        value={parseInt(weather.current.temp_f - 10, 10)}
      />
      </div>)}
      </div>
      </div>
      
      
</div>
    
         
          </div>
          <div class="description_wrapper">
            <div class="description">
          <p>{data.descriptions}</p>
          </div>
          </div>
        </>
        
     
      </Panel>
      <Panel title="Indicators">
      <h1 class="dash">Water Analyse Dashboard</h1>
     
        <div >
       {/* <div class="an">
      <Line options={options} data={data1} />
      </div> */}
      <div class="table-responsive-md">
   <table class="table table-hover">
            <thead>
              <tr>    
                <th scope="col"> Date</th>
                <th scope="col">Залізо
 загальне</th>
                <th scope="col">Азот амонійнийта аміак</th>
                <th scope="col"> Фосфати</th>
                <th scope="col">Завислі речовини</th>
                <th scope="col">СПАР</th>
                <th scope="col">XCK</th>
                <th scope="col">БСК-5</th>
              </tr>
            </thead>
            <tbody>
              {data.products.map(i => 
               
              
                  <tr key={i.id}>
                    <td scope="row">{i.date}</td>
                    <td scope="row">{i.stat1}</td>
                    <td scope="row">{i.stat2}</td>
                    <td scope="row">{i.stat3}</td>
                    <td scope="row">{i.stat4}</td>
                    <td scope="row">{i.stat5}</td>
                    <td scope="row">{i.stat6}</td>
                    <td scope="row">{i.stat7}</td>
                   
                  </tr>
                   
                
              )}
            </tbody>
          </table>  
          </div>
      </div>
      
      </Panel>
    
      <Panel title="Weather">
        
        
        {!isLoadingW && (
          <div class='changeble_size'>
            <h2 class="wether_tc">Current Weather</h2>
        
        <div class='all_stats_wrapper'>

            <div class='red'>
            <div class="weather_items">
        <img class='weather_img' src={`${weather.current.condition.icon}`} alt=""></img>
        <p class="wether_tc"> {tempf} </p>
        <p class="wether_tf" onClick={() => setTempF(`${weather.current.temp_f}`)}>°F</p>
        <p class="wether_tf" >/</p>
        <p class="wether_tf" onClick={() => setTempF(`${weather.current.temp_c}`)}>°C</p>
        </div>
        
            
           <div class='weather_stat'>
          <div > pressure: {weather.current.pressure_in}</div>
          <div > precip: {weather.current.precip_mm} m/m </div>
          <div > winds: {weather.current.wind_mph} m/h </div>
          <div > cloud: {weather.current.cloud}% </div>
          <div > humidity: {weather.current.humidity}% </div>
            </div>
            </div>
          <div class='black'>
               <div class="weater_locations">
          <div>{weather.location.name} ,{weather.location.region} ,{weather.location.country}</div>
          <div>{weather.current.condition.text}</div>
          <div>{weather.location.localtime}</div>
           <div>
      {(() => {
        if (weather.current.is_day === 1) {
          return (
            <div>Day</div>
          )
        } else if (weather.current.is_day === 0) {
          return (
            <div>Night</div>
          )
        } else {
          return (
            <div>Error</div>
          )
        }
      })()}
    </div>      
          </div>
            </div>
            </div>
            </div>
       )}

      </Panel>
    </Tabs>
 )}
    </div>
    </>
  );
};
export default Detail
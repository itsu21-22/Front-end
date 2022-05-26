import React, { useState, useEffect } from "react";
import './pages.css'
import Tabs from '../Components/Tabs'
import Panel from "../Components/Panel";
import MapWrapper from "../Components/Map";
import ReactSpeedometer from "react-d3-speedometer";
import { useLocation, Link } from "react-router-dom";
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

export const data1 = {
  labels,
  
  datasets: [
    {
      
      label: 'Nikcel',
      data: [1.6,9.3,2.2,5.7,5,8.1,10],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Zinc',
      data:[2,3.9,1.7,4,6,4.5,6.7],
      borderColor: 'rgb(153, 102, 6)',
      backgroundColor: 'rgba(53, 162, 100, 0.5)',
    },
    {
      label: 'Lead',
      data:[7.3,8.2,7.5,3.5,6.3,7.9,1.1],
      borderColor: 'rgb(153, 262, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Magnesium',
      data:[2.3,6.9,5.5,8.6,9.3,3.2,7.6],
      borderColor: 'rgb(153, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};






const Detail = ({ props }) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
 
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${state.id}/`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
       
      })
      .catch((error) => console.log(error));
  }, []);
  const [tempf, setTempF] = useState("");
  const [weather, setWeather] = useState();
  const [isLoadingW, setIsLoadingW] = useState(true);
  
  
useEffect(() => {
  
  fetch(`http://api.weatherapi.com/v1/current.json?key=093841b1f8d04688a3d121951222305 &q=Sambir&aqi=no`, {})
    .then((res) => res.json())
    .then((response) => {
      setWeather(response);
      setIsLoadingW(false);
      console.log(response)
     
    })
    .catch((error) => console.log(error));
}, []);

  const data1 = {
    labels,
    
    datasets: [
      {
        
        label: 'Nikcel',
        data: [1.6,9.3,2.2,5.7,5,8.1,10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Zinc',
        data:[2,3.9,1.7,4,6,4.5,6.7],
        borderColor: 'rgb(153, 102, 6)',
        backgroundColor: 'rgba(53, 162, 100, 0.5)',
      },
      {
        label: 'Lead',
        data:[7.3,8.2,7.5,3.5,6.3,7.9,1.1],
        borderColor: 'rgb(153, 262, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Magnesium',
        data:[2.3,6.9,5.5,8.6,9.3,3.2,7.6],
        borderColor: 'rgb(153, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <>


<MapWrapper/>
<div class="all_wrapper">
<Tabs>
      <Panel title="Information">
      {!isLoading && (
        
       <>
        <div class="item_wrapper" >
       
        <div class="item_in">
          <p class="item_detail"> {data.name}</p>
          <p class="item_detail">Place: {data.address.city}</p>
          </div>
          <div class="item_in">
          
          <p class="item_detail">Weather: {data.weather}</p>
          <p class="item_detail">Winds: {data.winds}</p>
          </div>


          <div class="Sp_wrapper">
            <div class="float_speed">
            <div class="Speedometer">
            Current Temperature
            {!isLoadingW && (
            <div>
          <ReactSpeedometer 
        minValue={0}
        maxValue={120}
        segments={10}
        ringWidth={70}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value} °F "
        value={parseInt(weather.current.temp_f - 10, 10)}
      />
      </div>)}
      </div>
      </div>
      <div class="float_speed">
      <div class="Speedometer">
        Longtitude
      <ReactSpeedometer
        minValue={0}
        maxValue={120}
        segments={10}
        ringWidth={70}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value}"
        value={parseInt(33, 10)}
      />
      </div>
      </div>
      <div class="Speedometer">
        Temperature
      <ReactSpeedometer
        minValue={0}
        maxValue={120}
        segments={10}
        ringWidth={70}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value}"
        value={parseInt(44, 10)}
      />
      </div>
</div>

<div class="Sp_wrapper">

<div class="Speedometer">
        Accres
      <ReactSpeedometer
        minValue={0}
        maxValue={120}
        segments={10}
        ringWidth={70}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value}"
        value={parseInt(45, 10)}
      />
      </div>
      <div class="Speedometer">
        Temperature
      <ReactSpeedometer
        minValue={0}
        maxValue={120}
        segments={10}
        ringWidth={70}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value}"
        value={parseInt(65, 10)}
      />
     
      </div>
</div>

    
         
          </div>
        </>
        
      )}
      </Panel>
      <Panel title="Analyse">
      <h1 class="dash">Water Analyse Dashboard</h1>
        <div class="an">
          
      <Line options={options} data={data1} />
      </div>
      </Panel>
    
      <Panel title="Weather">
        
        
        {!isLoadingW && (
          <div class='changeble_size'>
            <h2 class="wether_tc">Current Weather</h2>
        
        <div class='all_stats_wrapper'>

            <div class='red'>
            <div class="weather_items">
        <img class='weather_img' src={`${weather.current.condition.icon}`}></img>
        <p class="wether_tc"> {tempf} </p>
        <p class="wether_tf" onClick={() => setTempF(`${weather.current.temp_f}`)}>°F</p>
        <p class="wether_tf" >/</p>
        <p class="wether_tf" onClick={() => setTempF(`${weather.current.temp_c}`)}>°C</p>
        
        </div>
            </div>
            <div class='green'>
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
          <div>{weather.location.name} , {weather.location.region} , {weather.location.country}</div>
          <div>{weather.current.condition.text}</div>
          <div>{weather.location.localtime}</div>
           <div>
      {(() => {
        if (weather.current.is_day == 1) {
          return (
            <div>Day</div>
          )
        } else if (weather.current.is_day == 0) {
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
        </div>)}

      </Panel>
    </Tabs>

    </div>
    </>
  );
};
export default Detail
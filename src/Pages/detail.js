import React, { useState, useEffect } from "react";

import './pages.css'
import Tabs from '../Components/Tabs'
import Panel from "../Components/Panel";
import MapWrapper from "../Components/Map";
import ReactSpeedometer from "react-d3-speedometer";

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






const Detail = ({ match }) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}/`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
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
          
          {/* <p class="item_detail">Weather: {data.weather}</p>
          <p class="item_detail">Winds: {data.winds}</p> */}
          </div>
          <div class="Sp_wrapper">
            
            <div class="Speedometer">
            Latitude
          <ReactSpeedometer 
          
        minValue={0}
        maxValue={120}
        segments={10}
        ringWidth={70}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value} "
        value={parseInt(12, 10)}
      />
      </div>
      <div class="Speedometer">
        Longtitude
      <ReactSpeedometer
        minValue={0}
        maxValue={120}
        segments={10}
        ringWidth={70}
        segmentColors={["#FAFAFA", "#0083F9"]}
        currentValueText="${value}"
        value={parseInt(33 , 10)}
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
      <Panel title="About">
        <div class="item_wrapper"><h3 style={{color:'black'}}>Introduction</h3>
        <p>
The U.S. Geological Survey's (USGS) National Water Information System (NWIS) is a comprehensive and distributed application that supports the acquisition, processing, and long-term storage of water data. Water Data for the Nation serves as the publicly available portal to a geographically seamless set of much of the water data maintained within NWIS (additional background).

Nationally, USGS surface-water data includes more than 850,000 station years of time-series data that describe stream levels, streamflow (discharge), reservoir and lake levels, surface-water quality, and rainfall. The data are collected by automatic recorders and manual field measurements at installations across the Nation.

Data are collected by field personnel or relayed through telephones or satellites to offices where it is stored and processed. The data relayed through the Geostationary Operational Environmental Satellite (GOES) system are processed automatically in near real time, and in many cases, current data are available online within minutes.

Once a complete day of readings are received from a site, daily summary data are generated and made available online. USGS finalizes data at individual sites on a continuous basis as environmental conditions and hydrologic characteristics permit.</p></div>
      </Panel>
    </Tabs>

    </div>
    </>
  );
};
export default Detail
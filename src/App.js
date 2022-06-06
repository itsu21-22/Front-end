import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Reserviors from './Pages/Reserviors';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Detail from './Pages/DetailInfo';
import ArchiveInfo from './Pages/ArchiveInfo';


function App() {
  return (
    <div>
      <Header />
        <Routes>        
          <Route path="/" element={<Home/>} />
          <Route path='/item/:id' element={<Detail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/reserviors" element={<Reserviors/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/archive-info" element={<ArchiveInfo/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/footer';

import Home from './Pages/Home';

import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import { Routes, Route} from 'react-router-dom';
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
          <Route path="/archive" element={<Blog/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/archive-info" element={<ArchiveInfo/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

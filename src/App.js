import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/footer';

import Home from './Pages/Home';
import Detail from './Pages/detail';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import { Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <Routes>
                        
                        <Route path="/" element={<Home/>} />
                        <Route path='/item/:id' element={<Detail/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/contacts" element={<Contacts/>} />
                        <Route path="/blog" element={<Blog/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/registration" element={<Registration/>} />
                    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

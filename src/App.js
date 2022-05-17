import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
    <Footer/>
    </div>
  );
}

export default App;

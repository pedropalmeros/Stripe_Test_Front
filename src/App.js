import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Toaster 
          position="buttom-right"
          toastOptions={{duration: 4000,}}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Login' element={<Login />}/>        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, {BrowserRouter, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';

const App=() =>{

  return (

    <Container className='d-flex align-items-center justify-content-center'
    style={{minHeight:"100vh", maxWidth:"100%", backgroundColor: "#f8f9d2",
    backgroundImage: "linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)" }} 
    >
      <div className='w-100' style={{maxWidth:"400px"}}>

    <Router>
      <Routes>
      
      <Route path='/' element={<Signup/>} />

      </Routes>
    </Router>

    </div>

    </Container>

  );
}

export default App;

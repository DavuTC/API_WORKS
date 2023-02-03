import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Inputtext from './components/Inputtext';
import Soru1 from './Soru1';
import Soru2 from './Soru2';
import Soru3 from './Soru3';
import Soru4 from './Soru4';
import Soru5 from './Soru5';
import Soru6 from './Soru6';
import Soru7 from './Soru7';

function App() {
  
  return (
    <>
    <Soru1></Soru1><br/><br/><hr />
    <Soru2></Soru2><br/><br/><hr />
    <Soru3></Soru3><br/><br/><hr />
    <Soru4></Soru4><br/><br/><hr />
    <Soru5></Soru5><br/><br/><hr />
    <Soru6></Soru6><br/><br/><hr />
    <Soru7></Soru7><br/><br/><hr />
   
    </>
    
  );
}

export default App;

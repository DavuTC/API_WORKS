import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function Soru5() {
  const[sayiX,setSayiX]=useState("");
  const[sayiY,setSayiY]=useState("");
  const[karefarkı,setKarefarkı]=useState("");
  const handleClick= () =>{
    sayiX =="" || sayiY=="" ? alert("Bilgilerinizi kontrol ediniz"): setKarefarkı((sayiX*sayiX)-(sayiY*sayiY));
  }
  
  return (
    <>
    <h1>Soru5</h1>
    <Input value={sayiX} handleChange={setSayiX}>X :</Input>
    <br/><br/>
    <Input value={sayiY} handleChange={setSayiY}>Y :</Input>
    <br/><br/>
    <Button handleClick={handleClick}>Hesapla</Button>
    <br/><br/>
    <Input value={karefarkı} disabled={"disabled"} >X ve Y değerlerinin kareleri farkı :</Input>
   
    </>
    
  );
}

export default Soru5;

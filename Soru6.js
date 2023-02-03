import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function Soru6() {
  const[sayiA,setSayiA]=useState("");
  const[sayiB,setSayiB]=useState("");
  const[sayiC,setSayiC]=useState("");
  const[sonuc,setSonuc]=useState("");
  const handleClick= () =>{
    sayiA =="" || sayiB=="" || sayiC=="" ? alert("Bilgilerinizi kontrol ediniz"): setSonuc((2*sayiB)-(4*sayiA*sayiC));
  }
  
  return (
    <>
    <h1>Soru6</h1>
    <Input value={sayiA} handleChange={setSayiA}>A :</Input>
    <br/><br/>
    <Input value={sayiB} handleChange={setSayiB}>B :</Input>
    <br/><br/>
    <Input value={sayiC} handleChange={setSayiC}>C :</Input>
    <br/><br/>
    <Button handleClick={handleClick}>Hesapla</Button>
    <br/><br/>
    <Input value={sonuc} disabled={"disabled"} >2b-4ac :</Input>
   
    </>
    
  );
}

export default Soru6;

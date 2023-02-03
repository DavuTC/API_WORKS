import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function Soru4() {
  const[sayi,setSayi]=useState("");
  const [karesi,setKaresi]=useState("");
  const handleClick= () =>{
    sayi ==""  ? alert("Bilgilerinizi kontrol ediniz"): setKaresi(sayi*sayi);
  }
  
  return (
    <>
    <h1>Soru4</h1>
    <Input value={sayi} handleChange={setSayi}>Sayı :</Input>
    <br/><br/>
    <Button handleClick={handleClick}>Hesapla</Button>
    <br/><br/>
    <Input value={karesi} disabled={"disabled"} >Karesi :</Input>
   
    </>
    
  );
}

export default Soru4;

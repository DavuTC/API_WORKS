import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function Soru1() {
  const[fiyat,setFiyat]=useState("");
  const [kar,setKar]=useState("");
  const [satisFiyati, setSatisFiyati] = useState("");
  const handleClick= () =>{
    fiyat =="" || kar=="" ? alert("Bilgilerinizi kontrol ediniz"): setSatisFiyati(parseFloat( fiyat) * parseFloat((1+kar/100)));
    

  }
  return (
    <>
    <h1>Soru1</h1>
    <Input value={fiyat} handleChange={setFiyat}>Fiyatı girin :</Input>
    <br/><br/>
    <Input value={kar} handleChange={setKar}>Kar oranını girin:</Input>
    <br/><br/>
    <Button handleClick={handleClick}>Hesapla</Button>
    <br/><br/>
    <Input value={satisFiyati} disabled={"disabled"} >Satış fiyatı :</Input>
    </>
    
  );
}

export default Soru1;

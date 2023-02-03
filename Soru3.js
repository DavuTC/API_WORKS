import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function Soru3() {
  const[birimfiyat,setBirimfiyat]=useState("");
  const [adet,setAdet]=useState("");
  const [toplam, setToplam] = useState("");
  const handleClick= () =>{
    birimfiyat =="" || adet=="" ? alert("Bilgilerinizi kontrol ediniz"): setToplam(parseFloat( birimfiyat)*parseFloat(adet));
  }
  
  return (
    <>
    <h1>Soru3</h1>
    <Input value={birimfiyat} handleChange={setBirimfiyat}>Birim fiyat :</Input>
    <br/><br/>
    <Input value={adet} handleChange={setAdet}>Adet :</Input>
    <br/><br/>
    <Button handleClick={handleClick}>Hesapla</Button>
    <br/><br/>
    <Input value={toplam} disabled={"disabled"} >Toplam tutar :</Input>
   
    </>
    
  );
}

export default Soru3;

import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Inputtext from './components/Inputtext';

function Soru7() {
  const[dogumyili,setDogumyili]=useState("");
  const[sonuc,setSonuc]=useState("");
  const handleClick= () =>{
    dogumyili =="" ? alert("Bilgilerinizi kontrol ediniz"): EhliyetDurumuHesapla();
  }
  function EhliyetDurumuHesapla(){
    const yas=new Date().getFullYear()-dogumyili;
    console.log(yas);
    if(yas>17) setSonuc("Ehliyet alabilir");
    else setSonuc("Ehliyet alamaz");


  }
  
  return (
    <>
    <h1>Soru7</h1>
    <Input value={dogumyili} handleChange={setDogumyili}>Doğum Yılı :</Input>
    <br/><br/>
    <Button handleClick={handleClick}>Hesapla</Button>
    <br/><br/>
    <Inputtext value={sonuc} disabled={"disabled"} ></Inputtext>
   
    </>
    
  );
}

export default Soru7;

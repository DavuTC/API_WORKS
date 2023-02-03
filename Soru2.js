import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function Soru2() {
  const[kisakenar,setKisakenar]=useState("");
  const [uzunkenar,setuzunkenar]=useState("");
  const [alan, setAlan] = useState("");
  const [cevre, setCevre] = useState("");
  const handleClick= () =>{
    kisakenar =="" || uzunkenar=="" ? alert("Bilgilerinizi kontrol ediniz"): AlanveCevreHesapla();
  }
  function AlanveCevreHesapla(){
    let k=parseFloat(kisakenar);
    let u=parseFloat(uzunkenar);
    setAlan(k*u);
    setCevre((k+u)*2);

  }
  return (
    <>
    <h1>Soru2</h1>
    <Input value={kisakenar} handleChange={setKisakenar}>Kısa kenar  :</Input>
    <br/><br/>
    <Input value={uzunkenar} handleChange={setuzunkenar}>Uzun kenar:</Input>
    <br/><br/>
    <Button handleClick={handleClick}>Hesapla</Button>
    <br/><br/>
    <Input value={alan} disabled={"disabled"} >Alan :</Input>
    <br/><br/>
    <Input value={cevre} disabled={"disabled"} >Çevre :</Input>
    </>
    
  );
}

export default Soru2;

import React, { useState } from 'react'



export default function BasicForm() {
    let [Principal , setPrincipal]=useState("");
    let [Intrest, setIntrest]=useState("");
    let [Year ,setYear]=useState("");
let [display , setDisplay]=useState("");
    
function something(){
        const princi=parseFloat(Principal);
        const In=parseFloat(Intrest);
        const year=parseFloat(Year);
        if(princi >=0 && In>=0 && year>=0){
  const val=(Number(princi) * Number( In ) * Number( year))/100;
  setDisplay(val);
    }
    else{
      setDisplay("The one or all Values are in Negative");
    }
  
  
  }
  return (
    <div>
        <h1>BasicForm</h1>
        <input type='number' placeholder='Principal Amount' value={Principal} onChange={event=>setPrincipal(event.target.value)} />
   <br />
   {Principal<0 && <span className='principal'>Principal amount Should not be in Negative</span>}
   <br />
   <br/>
   <input type='number' placeholder='Rate Of Intrest' value={Intrest} onChange={e=>setIntrest(e.target.value)} />
   <br/>
   {Intrest <0 && <span className='intrest'>Intrest should not be in Negative</span>}
   <br/>
   <input type='number' placeholder='Period Of Time' value={Year} onChange={e=>setYear(e.target.value)} />
   <br/>
   {Year < 0 && <span className='year'>Year should not be in Negative</span>}
<br/>
<br/>
   <button onClick={()=>something()}>Click To CalculateIntrest</button>
   <p className='result'> Result={display}</p>
    </div>
  )
}

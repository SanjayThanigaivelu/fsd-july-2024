import axios from 'axios'
import React, { useState } from 'react'

export default function Apii() {
 let [variable,setvar]=useState("");
    function calling(){
axios.get("https://catfact.ninja/fact").then(response=>setvar(response.data.fact))
.catch(e=>{
    setvar(e)
});
 }
 
 
 
    return (
    <div>
<button onClick={()=>calling()}>Click Me</button>
<br/>
     {variable}
    </div>
  )
}

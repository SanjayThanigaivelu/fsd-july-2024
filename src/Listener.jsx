import React, { useState } from 'react'

function Update(){
    let [value,setValue]=useState(5);
    setValue(value+1);
}
export default function Listener() {
   
    return (
    <div>
        <button onClick={()=>Update}>Click ME</button>
        
    </div>
  )
}

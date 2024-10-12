import React, { useEffect, useState } from 'react'

export default function UseEffort() {
 
    let [count1 , setCout1]=useState(0);

  useEffect(()=>{
    console.log(`count1 is updated for ${count1} ` )
  },[count1]);

  useEffect(()=>{
console.log('i am displaying because this is the first time page loading')
  },[])

  function fun(){
setCout1(count1+1);
  }

    return (
    <div>
<button onClick={()=>fun()}>Click ME</button>
    <p>CountVAlue={count1}</p>
    </div>
  
)
}

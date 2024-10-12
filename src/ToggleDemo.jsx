import React, { useState } from 'react'

export default function Toggle() {
    let [flag, setFlag] =useState('green-bg');
    function someFunction() {
       flag==='green-bg'? setFlag('red-bg') : setFlag('green-bg');
        
    }
    return (
        <div>
            <button className={flag} onClick={()=>someFunction()}>Click Me</button>
            {
                // flag && <p>Lorem ipsum dolor sit amet </p>
              //  flag ? <p>Lorem ipsum dolor sit amet </p> : <></>
                // <p className={flag}>Hiii there how are you</p>
            }
        </div>
    )
}
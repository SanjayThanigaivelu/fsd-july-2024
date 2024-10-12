import React, { useState } from 'react'
import Father from './Father'
import { GlobalData } from './globalData'

export default function Grandpa() {
  let [count, setCount] = useState(100);
function increament(){
  setCount(count+1);
}
  return (
    <fieldset>
      <legend>Grandpa</legend>
      <GlobalData.Provider value={{ increament: increament, count: count }}  >
        <Father />
      </GlobalData.Provider>

    </fieldset>
  )
}

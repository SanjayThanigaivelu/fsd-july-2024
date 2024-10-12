import React, { useContext } from 'react'
import Son from './Son'
import { GlobalData } from './globalData'

export default function Father() {
  const { count, increament } = useContext(GlobalData)
  return (
    <fieldset>
        <legend>Father</legend>
        <button onClick={()=>increament()}>FatherChange</button>
        count -{count}
        <Son/>
    </fieldset>
  )
}

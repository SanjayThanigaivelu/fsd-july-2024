import React, { useContext } from 'react'
import { GlobalData } from './globalData'

export default function Son() {
    const { count, increament } = useContext(GlobalData)
    return (
        <fieldset>
            <legend>Son</legend>
            <button onClick={() => increament()}>Change</button>
            {/* count - {count} */}
            {count}
        </fieldset>
    )
}

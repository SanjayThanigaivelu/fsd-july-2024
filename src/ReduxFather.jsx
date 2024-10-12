import React, { useContext } from 'react'
import Son from './Son'
import { useSelector } from 'react-redux'

export default function Father() {
  const { value, email } = useSelector(store => store.counter)
  return (
    <fieldset>
      <legend>Father</legend>
      value - {value}
      <Son />
    </fieldset>
  )
}

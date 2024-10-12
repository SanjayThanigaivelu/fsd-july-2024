import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bigIncrement, increment } from './counterSlice';

export default function Son() {

    const dispatch = useDispatch();

    const { value, email } = useSelector(store => store.counter)
    const { cartCount } = useSelector(store => store.cart);


    function change() {
        dispatch(bigIncrement())
    }

    return (
        <fieldset>
            <legend>Son</legend>
            {/* cartCount { cartCount} <br/> */}
            <button onClick={() => change()}>Change</button>
            count - {value}
        </fieldset>
    )
}

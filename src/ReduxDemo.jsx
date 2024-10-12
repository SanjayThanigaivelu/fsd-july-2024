import React from 'react'
import Grandpa from './Grandpa'
import { Provider } from 'react-redux'
import { store } from './store'

export default function ReduxDemo() {
    return (
        <div>
            <Provider store={store}>
                <h1>Redux Demo</h1>
                <Grandpa />
            </Provider>
        </div>
    )
}

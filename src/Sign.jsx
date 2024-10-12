import React from 'react'
import {TextField, Button } from '@mui/material/';

function login() {
  return (
    <div>
        <h1>Login</h1>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <br/>
        <br/>
        <TextField id='outlined-basic' label='Password' variant='outlined' />
        <br/>
        <br/>
        <Button variant="contained">Login</Button>
    </div>
  )
}

export default login
import axios from 'axios'
import React, { useState } from 'react'

export default function UsersApi() {

    let [userObj, setUserObj] = useState(null)

    function apiCall() {
        axios.get("https://randomuser.me/api/")
            .then(response => {
                // success
                setUserObj(response.data.results[0])
            })
            .catch(error => {
                //failure
            })
    }
    return (
        <div>
            <h1>UsersApi</h1>
            <button onClick={() => apiCall()}>Call API</button>
            <hr />
            {
                userObj != null &&
                <div className='my-flex'>
                    <img src={userObj.picture.large} width={'100px'} alt='User' />
                    <div>
                        <div>
                        Name :{userObj.name.title} {userObj.name.first} {userObj.name.last}
                        </div>
                        <div>
                          Location: {userObj.location.state}-{userObj.location.country}
                        </div>
                   <div>
                   DOB :{userObj.dob.date} <br/>
                    AGE :{userObj.dob.age} <br/>
                    Phone :{userObj.phone}<br/>
                    Cell :{userObj.cell}<br/>
                    Email :{userObj.email}
                    </div>
                   
                    </div>
                </div>
            }
        </div>
    )
}

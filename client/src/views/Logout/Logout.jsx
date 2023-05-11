import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IoLogOut } from 'react-icons/io5'


function Logout(){
    const { logout } = useAuth0()
    return(
        <div>
            <button onClick={()=> logout()}><IoLogOut /></button>
        </div>
    )
}

export default Logout
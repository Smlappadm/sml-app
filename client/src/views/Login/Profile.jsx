import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"

function Profile(){
    const{user,isAuthenticated} = useAuth0()
    return(

        <div>
            {user && (
            <div>
                <img className={styles.img} src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
            </div>
            )}
        </div>
    )
}

export default Profile 
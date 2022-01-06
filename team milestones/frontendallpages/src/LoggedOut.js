import React, { useContext } from 'react';

// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';

function LoggedOut(){

    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    function logout() {
        updateUser(
            {
                ...{}
            }
        )
        localStorage.clear()
    }

    return(
        <>
        <div className="px-4 container">
        <h3 className="py-3"> Thank You </h3>
        <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
        </>
    )
    
}

export default LoggedOut;
import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error =  useRouteError();
    const navigate = useNavigate()
    const {signOutUser} = useContext(AuthContext);

    const handleSignOut = () =>{
        signOutUser()
         .then(() =>{
            navigate("/login")
         })
         .catch(error => console.error(error))
       }

    return (
        <div>
            <p className="text-red-500">something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4 className="text-xl">Please <button onClick={handleSignOut}>Sign Out</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;
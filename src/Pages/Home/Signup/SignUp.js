import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../Hooks/useToken';

const SignUp = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const navigate = useNavigate(); 
    const [createdUserEmail, setCreatedUserEmail] = useState("")
    const [token] = useToken(createdUserEmail);

    if(token){
      navigate("/");
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError("")
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
            toast("user created successfully")
            const userInfo = {
              displayName : data.name
            }
            updateUser(userInfo)
            .then(() =>{
              saveUser(data.name, data.email)
            })
            .catch(error => console.error(error))
        })
        .catch(error => {
          console.error(error)
           setSignUpError(error.message)
        })
    }


    const saveUser = (name, email) =>{
        const user = {name, email}; 
        fetch("https://doctors-portal-server-tarikulk.vercel.app/users", {
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           setCreatedUserEmail(email)
        })
    }

    
    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-3xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
             {...register("name",{
                required: "Name is Required"
             })}
              type="text" 
              className="input input-bordered w-full max-w-xs"
            />  
             {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
          </div> 

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
             {...register("email", {
                required: true,

             })}
              type="email" 
              className="input input-bordered w-full max-w-xs"
            />  
             {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          </div> 

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
             {...register("password", {
                required:"password is required",
                minLength:{value:6, message:"password must be 6 characters long"},
                pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/, message:'password must have uppercase number and special  characters'}
             })}
              type="password" 
              className="mb-4 input input-bordered w-full max-w-xs"
            /> 
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div> 
          <input type="submit" value="Sign Up" className="btn btn-accent w-full" />
          {signUpError && <p className='text-red-600 text-center'>{signUpError}</p>}
        </form>
        <p>Already have an account ? <Link to="/login" className="text-secondary">Login</Link></p>
        <div className="divider">or</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default SignUp;
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate =  useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=600&key=${imageHostKey}`;
    fetch(url, {
        method:"POST",
        body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
        if(imgData.success){
            console.log(imgData.data.url)
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url
            }
            // save doctor information to the database 
            fetch("https://doctors-portal-server-tarikulk.vercel.app/doctors",{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(`${data.name} is added successfully`)
                navigate("/dashboard/manageDoctors")
            })
        }
    })
  };

  

  const {data: specialties , isLoading} = useQuery({
    queryKey:["appointmentSpecialty"],
    queryFn: async () =>{
       const response = await fetch("https://doctors-portal-server-tarikulk.vercel.app/appointmentSpecialty")
       const data = await response.json()
       return data;
    }
  })

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="w-96 p-7">
        <h1 className="text-3xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is Required",
              })}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
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
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
             {...register("specialty")}
             className="select select-bordered w-full max-w-xs"> 
              {
                specialties.map(specialty =><option 
                key={specialty._id}
                value={specialty.name}
                >{specialty.name}</option>)
              }
            
            </select>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              {...register("image", {
                required: "photo is Required",
              })}
              type="file"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && (
              <p className="text-red-600">{errors.img.message}</p>
            )}
          </div>

          <input
            type="submit"
            value="Add Doctor"
            className="btn btn-accent w-full"
          />
          {/* {signUpError && <p className='text-red-600 text-center'>{signUpError}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;


// Third party to store images 
// 1. third party image hoisting server 
// 2.file system of your server 
// 3. mongodb (database)
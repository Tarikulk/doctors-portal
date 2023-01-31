import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal =  () =>{
        setDeletingDoctor(null)
    }


    const {data: doctors, isLoading, refetch} = useQuery({
        queryKey: ["doctors"],
        queryFn: async() =>{
            try{
               const res = await fetch("https://doctors-portal-server-tarikulk.vercel.app/doctors", {
                headers:{
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
               });
               const data = await res.json();
               return data;
            }
            catch(error){
            
            }
        }
    })

    
    const handleDeleteDoctor = doctor =>{
      fetch(`https://doctors-portal-server-tarikulk.vercel.app/doctors/${doctor._id}`, {
       method:"DELETE",
       headers:{
         authorization:`bearer ${localStorage.getItem("accessToken")}`
       }
      })
      .then(res => res.json())
      .then(data => {
       if(data.deletedCount > 0 ){
         toast.success(`${doctor.name} deleted successfully`)
         refetch()
       }
      })
 }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl'>Manage Doctors: {doctors?.length}</h1>
            <div className="overflow-x-auto">
  <table className='table w-full'>
    <thead>
      <tr>
        <th>Roll</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody> 
      {
        doctors?.map((doctor, i) => <tr key={doctor._id}>
            <th>{i + 1}</th>
            <td><div className="avatar">
            <div className="w-24 rounded-full">
                  <img src={doctor.image} alt="/doctor" />
            </div>
            </div></td>
            <td>{doctor.name}</td>
            <td>{doctor.email}</td>
            <td>{doctor.specialty}</td>
            <td>
            <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm bg-red-600">Delete</label>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
       {
        deletingDoctor && <ConfirmationModal 
        closeModal={closeModal}
        successAction={handleDeleteDoctor}
        successButtonName="Delete"
        modalData = {deletingDoctor}
        title={`Are you sure you want to delete ?`}
        message={`if you delete ${deletingDoctor.name}. It cannot be undone`}
        ></ConfirmationModal>
       }
        </div>
    );
};

export default ManageDoctors;
import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const {user} = useContext(AuthContext);

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;


    const booking = {
      appointmentDate : date,
      treatment: treatmentName, 
      patient: name,
      slot,
      email,
      phone,
      price
    }

    // TODO: send data to the server
    // and once the data is saved then close the modal 
    // and display success toast 
   
    fetch("http://localhost:5000/bookings", {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
      setTreatment(null);
      toast.success("booking confirmed")
      refetch();
      }
      else{
        toast.error(data.message)
      }
    })
    
  }


  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              readOnly
              className="input w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full">
           
              {
                slots.map((slot, i) => <option key={i}  value={slot}>{slot}</option> )
              }
            </select>
            <input
              defaultValue={user?.displayName}
              readOnly
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              defaultValue={user?.email}
              readOnly
              name="email"
              type="text"
              placeholder="Email Address"
              className="input w-full input-bordered"
              />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <div className="w-full text-center">
              <input
                className="w-full max-w-xs btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

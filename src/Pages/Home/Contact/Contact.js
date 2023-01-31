import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{backgroundImage:`url(${appointment})`}} className="rounded-lg">
  <div className="hero py-6">
    <div className="card  w-full max-w-sm shadow-2xl ">
      <div className="card-body">
        <div className="form-control"> 
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control"> 
          <input type="text" placeholder="subject" className="input input-bordered" /> 
        </div>
        <div className="form-control"> 
        <textarea className="h-30 textarea textarea-bordered" placeholder="Bio"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
  </div>
</div>
        </section>
    );
};

export default Contact;
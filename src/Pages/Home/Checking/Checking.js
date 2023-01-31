import React from 'react';
import image from "../../../assets/images/treatment.png"

const Checking = () => {
    return (
        <div>
             <div className="hero">
  <div className="hero-content  flex-col lg:flex-row ">
    <img src={image} className="lg:w-80 rounded-lg shadow-2xl" alt='' />
    <div  className='ml-12'>
      <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content here, content <br/>here', making it look like readable English. Many desktop <br /> publishing packages and web page</p>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Checking;
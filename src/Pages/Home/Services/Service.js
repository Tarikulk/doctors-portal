import React from 'react';

const Service = ({service}) => {

    const {image, name, description} = service

    return (
        <div>
        <div className="card w-96">
  <figure>
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p> 
  </div>
</div>        
        </div>
    );
};

export default Service;
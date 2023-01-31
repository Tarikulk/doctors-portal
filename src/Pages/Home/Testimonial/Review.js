import React from "react";

const Review = ({ review }) => {
  const { name, image, reviews, location } = review;

  return (
    <div>
      <div className="card">
        <div className="card-body shadow-xl rounded-lg">
          <p>{reviews}</p>
          <div className="flex items-center">
            <div className="avatar mr-6 mt-4">
              <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="" />
              </div>
            </div>
              <div>
                <h5 className="text-lg">{name}</h5>
                <p>{location}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

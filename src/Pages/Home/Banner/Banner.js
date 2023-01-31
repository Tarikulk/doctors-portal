import React from 'react';
import backgroundImage from "../../../assets/images/bg.png"
import chair from "../../../assets/images/chair.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${backgroundImage})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
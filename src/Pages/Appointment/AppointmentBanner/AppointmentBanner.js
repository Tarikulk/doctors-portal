import React from 'react';
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="rounded-lg shadow-2xl lg:w-1/2"
            alt=""
          />
          <div className="mr-6">
            <DayPicker
            mode="single"
            selected={selectedDate}
            onDayClick={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;

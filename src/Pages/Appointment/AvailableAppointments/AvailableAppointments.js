import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, "PP");
 
    const {data : appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey:['appointmentOptions'],
        queryFn: async() => {
        const res = await fetch(`https://doctors-portal-server-tarikulk.vercel.app/v2/appointmentOptions?date=${date}`)
        const data = await res.json();
        return data;
    }
    });

    if(isLoading){
        return <Loading></Loading>
    };

     
    return (
        <section className='my-16'>
            <p className='text-center font-bold text-secondary my-5'>Available appointments on {format(selectedDate, "PP")}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-10'>
                {
                    appointmentOptions?.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
           {
            treatment &&
            <BookingModal
            setTreatment={setTreatment}
            selectedDate={selectedDate}
            treatment={treatment}
            refetch={refetch}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;
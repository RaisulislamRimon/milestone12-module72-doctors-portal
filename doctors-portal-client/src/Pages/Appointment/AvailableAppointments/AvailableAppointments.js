import { format } from "date-fns";
import React, { useEffect } from "react";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = React.useState([]);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAppointmentOptions(data);
      });
  }, [selectedDate]);
  return (
    <section className="my-16">
      <p className="text-center text-emerald-500 font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
          />
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointments;

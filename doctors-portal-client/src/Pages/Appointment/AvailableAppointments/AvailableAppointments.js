import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointments;

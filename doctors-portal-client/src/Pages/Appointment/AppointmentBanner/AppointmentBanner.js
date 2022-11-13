import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }

  console.log(selectedDate);

  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" /> */}
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          {/* <div className="lg:w-1/3 mr-6"> */}
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              footer={footer}
            />
            <p>Available Appointments on {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;

import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };

    console.log(name, patientName, email, slot, phone, date);
    console.log(booking);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name} </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={format(selectedDate, "PP")}
              disabled
              className="input w-full input-bordered "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full input-bordered "
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered "
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

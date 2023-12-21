import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

//manage the selected date
const Calendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  //handles the change of date by updating the selected date and notifying the parent of the change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default Calendar;

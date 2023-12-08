// src/App.js
import React, { useState } from "react";
import Calendar from "./Calendar";
import FruitInfo from "./FruitsInfo";
import "./styles.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Seasonal Blooms</h1>
      <p>please choose a date</p>
      <Calendar onDateChange={handleDateChange} />
      {selectedDate && <FruitInfo date={selectedDate} />}
    </div>
  );
};

export default App;

// src/App.js
import React, { useState } from "react";
import Calendar from "./Calendar";
import FruitInfo from "./FruitsInfo";
import PlantandVeggies from "./PlantandVeggies";
import "./styles.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activePage, setActivePage] = useState("home");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <header>
        <ul>
          <li>
            <a
              href="#"
              className={activePage === "home" ? "active" : ""}
              onClick={() => handlePageChange("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activePage === "plantsAndVeggies" ? "active" : ""}
              onClick={() => handlePageChange("plantsAndVeggies")}
            >
              Plants & Veggies
            </a>
          </li>
        </ul>
      </header>
      <h1>Seasonal Blooms</h1>
      {activePage === "home" && <p>Please choose a date</p>}
      {activePage === "home" && <Calendar onDateChange={handleDateChange} />}
      {selectedDate && activePage === "home" && (
        <FruitInfo date={selectedDate} />
      )}

      {activePage === "plantsAndVeggies" && <PlantandVeggies />}
    </div>
  );
};

export default App;

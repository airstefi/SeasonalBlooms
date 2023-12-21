// src/App.js
import React, { useState } from "react";
import Calendar from "./Calendar";
import FruitInfo from "./FruitsInfo";
import PlantandVeggies from "./PlantandVeggies";
import { tip } from "./tips/totd";
import { info } from "./tips/infoBits";
import "./styles.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [tipRand, setTipRand] = useState(0); //for tip function

  function changeTipRand(i) {
    setTipRand(i + 1);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  function Robert(props) {
    //num is made to be a pos random number within array length
    var num = Math.floor(Math.random() * 3);
    return (
      <>
        <h1> </h1>
        <button onClick={() => props.changeAFromParent(num)}>New Tip</button>
      </>
    );
  }

  function printDidYK(props) {
    return (
      {info.map((c, index) => (
        <p key={index}>
          {" "}
          <h3> {c.title} </h3> {c.bit}
        </p>
      ))}
    );
  }

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
      {activePage === "home" && (
        <Robert aFromParent={tipRand} changeAFromParent={changeTipRand} />
      )}
      {activePage === "home" && <h4> {tip[tipRand].content} </h4>}
      {activePage === "home" && <hr />}
      {activePage === <h2> Did you know... </h2>}
      {activePage === "home" && <printDidYK bFromParent={infoBits}/> }
      
      {info.map((c, index) => (
        <p key={index}>
          {" "}
          <h3> {c.title} </h3> {c.bit}
        </p>
      ))}
      {activePage === "plantsAndVeggies" && <PlantandVeggies />}
    </div>
  );
};

export default App;

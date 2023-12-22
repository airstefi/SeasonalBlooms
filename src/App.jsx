// src/App.js
import React, { useState } from "react";
import Calendar from "./Calendar";
import FruitInfo from "./FruitsInfo";
import PlantandVeggies from "./PlantandVeggies";
import { tip } from "./totd";
import { info } from "./infoBits";
import "./styles.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activePage, setActivePage] = useState("home");
  const [tipRand, setTipRand] = useState(0); //for tip function
  const headerImageUrl =
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; //photo that goes in the header

  //change the state of the tip randomizer
  function changeTipRand(i) {
    setTipRand(i + 1);
  }

  //handles when the date is changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //handles when the page is changed from home to plant and veggie and vise versa
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

  //prints the information that is inslide the array
  function printDidYK() {
    return (
      <>
        {info.map((c, index) => (
          <p key={index}>
            <h3>{c.title}</h3>
            {c.bit}
          </p>
        ))}
      </>
    );
  }

  //renders everything, here we have the active pages, so it renderes based on which page we want it to be on
  //so if we want the calander to be in the home the active page will be equal to home
  //we have all the components that we want & also connected to our other files.
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

      <img
        src={headerImageUrl} //our images is here and we do our style here as well
        alt="Header Image"
        style={{
          width: "100%", // make the image span the entire width of the container
          maxHeight: "200px",
          objectFit: "cover",
          borderRadius: "8px", //rounded corners
        }}
      />
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
      {activePage === "home" && <h2> Did you know... </h2>}
      {activePage === "home" && <printDidYK />}

      {activePage === "home" && (
        <>
          {info.map((c, index) => (
            <p key={index}>
              {" "}
              <h3> {c.title} </h3> {c.bit} {c.img}
            </p>
          ))}
        </>
      )}
      {activePage === "plantsAndVeggies" && <PlantandVeggies />}
    </div>
  );
};

export default App;

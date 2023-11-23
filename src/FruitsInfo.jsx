// src/components/FruitInfo.js
import React from "react";

const FruitInfo = ({ date }) => {
  // Add logic to determine fruits in season based on the date
  const fruitsInSeason = ["Apple", "Orange", "Banana"];

  return (
    <div>
      <h2>Fruits in Season for {date.toDateString()}</h2>
      <ul>
        {fruitsInSeason.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitInfo;

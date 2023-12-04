// src/components/FruitInfo.js
import React from "react";
import { products } from "./veggieinfo.json";

const FruitInfo = ({ date }) => {
  const fruitsData = products;

  //having the veggies print together in each of the seasons instead of just one month
  const seasonMapping = {
    spring: { startMonth: 2, endMonth: 4 }, // March, April, May for spring
    summer: { startMonth: 5, endMonth: 7 }, // June, July, August for summer
    fall: { startMonth: 8, endMonth: 10 }, // September, October, November for fall
    winter: { startMonth: 11, endMonth: 1 }, // December, January, February for winter
  };

  const getSeasonForDate = (checkDate) => {
    const checkMonth = checkDate.getMonth();

    for (const [season, { startMonth, endMonth }] of Object.entries(
      seasonMapping,
    )) {
      if (
        (checkMonth >= startMonth && checkMonth <= endMonth) ||
        (startMonth > endMonth &&
          (checkMonth >= startMonth || checkMonth <= endMonth))
      ) {
        return season;
      }
    }

    return null;
  };

  const selectedSeason = getSeasonForDate(date);

  //winter months do not work so i did it manually
  const fruitsInSeason = fruitsData.filter((fruit) => {
    const harvestMonth = fruit.harvest - 1; // Adjust month to be zero-based (0-11)
    return (
      (selectedSeason === "winter" &&
        (harvestMonth === seasonMapping.winter.startMonth ||
          harvestMonth === seasonMapping.winter.endMonth)) ||
      (harvestMonth >= seasonMapping[selectedSeason].startMonth &&
        harvestMonth <= seasonMapping[selectedSeason].endMonth)
    );
  });

  return (
    <div>
      <h2>
        Fruits & Veggies ready to Harvest for {date && date.toDateString()}
      </h2>
      <ul>
        {fruitsInSeason.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitInfo;

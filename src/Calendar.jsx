import React from "react";
import { products } from "./veggieinfo.json";
import "./styles.css";

const FruitInfo = ({ date }) => {
  const fruitsData = products;

  //having the veggies print together in each of the seasons instead of just one month
  const seasonMapping = {
    spring: { startMonth: 2, endMonth: 4 }, // March, April, May for spring
    summer: { startMonth: 5, endMonth: 7 }, // June, July, August for summer
    fall: { startMonth: 8, endMonth: 10 }, // September, October, November for fall
    winter: { startMonth: 11, endMonth: 1 }, // December, January, February for winter
  };

  //here we get the month of the date the user has chosen
  const getSeasonForDate = (checkDate) => {
    const checkMonth = checkDate.getMonth();

    //for loopp that goes through the months array
    for (const [season, { startMonth, endMonth }] of Object.entries(
      seasonMapping
    )) {
      //check the date to see if it falls between the months and return the month if it is
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

  //harvest
  //filter the data based on the selected date
  //winter months do not work so i did it manually
  const fruitsInSeason = fruitsData.filter((fruit) => {
    const harvestMonth = fruit.harvest - 1; // adjust months to be between 0 and 11
    return (
      (selectedSeason === "winter" &&
        (harvestMonth === seasonMapping.winter.startMonth ||
          harvestMonth === seasonMapping.winter.endMonth)) ||
      (harvestMonth >= seasonMapping[selectedSeason].startMonth &&
        harvestMonth <= seasonMapping[selectedSeason].endMonth)
    );
  });

  //same thing but for plants ready to plant
  const fruintsPlant = fruitsData.filter((pl) => {
    const plantMonth = pl.plant - 1; // Adjust month to be zero-based (0-11)
    return (
      (selectedSeason === "winter" &&
        (plantMonth === seasonMapping.winter.startMonth ||
          plantMonth === seasonMapping.winter.endMonth)) ||
      (plantMonth >= seasonMapping[selectedSeason].startMonth &&
        plantMonth <= seasonMapping[selectedSeason].endMonth)
    );
  });

  //render the data - first the ready to harvest and then ready to plant
  return (
    <div>
      <h2> The date you've chosen is {date && date.toDateString()}</h2>
      <h3>Fruits & Veggies ready to Harvest</h3>
      <ul>
        {fruitsInSeason.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
      <h3>Fruits & Veggies ready to Plant </h3>
      <ul>
        {fruintsPlant.map((pl, index) => (
          <li key={index}>{pl.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitInfo;

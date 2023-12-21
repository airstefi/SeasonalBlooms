import React from "react";
import { products } from "./veggieinfo.json";
import "./styles.css";

const PlantandVeggies = () => {
  return (
    <div>
      <h2>Plants & Veggies Page</h2>
      <ul>
        {/* this is a map function where we get the items from the json file and print them to the screen
        in our plants and veggiees page */}
        {products.map((product) => (
          <li key={product.pid}>
            <h3>{product.name}</h3>
            <p>Harvest Month: {product.harvest}</p>
            <p>Plant Month: {product.plant}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantandVeggies;

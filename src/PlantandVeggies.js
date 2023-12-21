// src/components/FruitInfo.js
import React from "react";
import { products } from "./veggieinfo.json";
import "./styles.css";

const PlantandVeggies = () => {
  return (
    <div>
      <h2>Plants & Veggies Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.pid}>
            <h3>{product.name}</h3>
            <p>Harvest Month: {product.harvest}</p>
            <p>Plant Month: {product.plant}</p>
            {/* Add other details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantandVeggies;

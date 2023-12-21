import React, { useState } from "react";

/*
  This file contains the tips generated when the user clicks the "New Tip" button on the homepage.
  The tip shown is from a randomised index (chosen by id number).
  These are short and sweet, sometimes based on the fruits and veggies in the database, sometimes functions of the website.
*/

const tip = [
  {
    id: 1,
    content: "Click the 'New Tip' button for some helpful or random facts!",
  },
  {
    id: 2,
    content:
      "There are a few informational pieces at the bottom of the page with further links for learning about your garden and what you can do for the environment.",
  },
  {
    id: 3,
    content:
      "It is important to plan your garden before planting - some plants are greedy with soil and will end up taking over your whole garden!",
  },
  {
    id: 4,
    content:
      "While wildlife within the garden is to be expected, bugs and pests can harm the enviroment you create! Learn more below in the 'Did you know' section!",
  },
];

export { tip };

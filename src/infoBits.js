import React, { useState } from "react";

const info = [
  {
    title: "Bees and gardens",
    bit: "Apart from being expert producers of honey, bees also play a key role in pollination of nearly all flowers and fruits we enjoy - meaning the absence of bees could be the very thing holding your garden back. Bees spread pollen from flower to flower - a process called pollination, which is critical for plants to reproduce, produce seeds, and keep flowers and fruits coming in the months ahead. Without pollinators, flowers will not produce as many seeds or as many flowers. If you want flowers or fruits in your garden, you’re going to need some kind of pollinator. Given their unique place in the ecosystem (as well as their current struggle keeping colonies healthy and thriving), bees might just be your best bet.",
    img: (
      <img
        width="280"
        height="180"
        src="https://images.unsplash.com/photo-1702680852911-fa89bd332fb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    title: "Your impact on the environment",
    bit: "Gardening is a way of improving the environment we live in via the addition of plants, flowers, fruits, and vegetables. When we garden — especially organically — we improve the air and the soil quality. We are growing our own food, beautifying our space, and instead of taking something away from the natural world, we are adding and tending to something green and beautiful. Considering how deep humanity’s carbon footprint is these days, something that takes away CO2 and harmful chemicals could definitely be considered helpful for the environment.",
    img: (
      <img
        width="280"
        height="180"
        src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    title: "Pests in the garden",
    bit: "Most insects and wildlife found in the vegetable garden are not pests, around 95% are beneficial or harmless. The best gardens are teeming with life, and maintaining the right balance of beneficial pests and wildlife while reducing or eliminating the populations of damage causing insects and pests is what pest control is all about. The easiest and most cost effective method of controlling pests is to use natural and preventative means and there are a few that work for every pest. For some tips, visit https://www.quickcrop.ie/blog/garden-pests/.",
    img: (
      <img
        width="280"
        height="180"
        src="https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
];

export { info };

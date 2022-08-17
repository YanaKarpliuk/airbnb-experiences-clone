import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import star from "./img/Star.png"
import data from "./data";

export default function App(){
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id} // To remove the error => Warning: Each child in a list should have a unique "key" prop.
        {...item} // the same as item={item}, slight changes in App.js
        imgStar={star}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}
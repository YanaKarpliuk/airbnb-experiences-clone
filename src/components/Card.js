import React from "react";

export default function Card(props) {
  let badgeText
  if(props.openSpots === 0) { // because of {...items} in App.js, we no longer need to write like this: props.item.openSpots
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {/* if badgeText exists, display it */}
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.coverImg} className="card-image" />
      <div className="card-stats">
         <img src={props.imgStar} className="card-star"/>
         <span>{props.stats.rating}</span>
         <span className="gray">({props.stats.reviewCount}) • </span>
         <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price"><span className="bold" >From ${props.price}</span> / person</p>
    </div>
  )
}
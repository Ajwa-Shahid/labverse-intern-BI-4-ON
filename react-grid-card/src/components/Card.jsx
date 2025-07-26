import React from "react";
import './Card.css';

const Card = props => {
  return(
    <div className="gridCards">
        <img src={props.imgCard} alt="Product" />
        <p>AmazonBasics {props.pieces} Bed-In-A-Bag, Twin/Twin {props.size} {props.color}</p>
        <h1>{props.dollars}</h1>
        <img src="/IMG/primeLogo.png" alt="Prime Logo" />
        {props.ratings}
        {props.ratingNo}
        {props.children}
    </div>

  )

}

export default Card;
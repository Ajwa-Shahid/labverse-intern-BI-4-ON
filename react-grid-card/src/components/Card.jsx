import React from "react";
import './Card.css';

const Card = ({ imgCard, pieces, size, color, dollars, ratings, ratingNo, children }) => {
  return(
    <div className="gridCards">
        <img src={imgCard} alt="Product" />
        <p>AmazonBasics {pieces} Bed-In-A-Bag, Twin/Twin {size} {color}</p>
        <h1>{dollars}</h1>
        <img src="/IMG/primeLogo.png" alt="Prime Logo" />
        {ratings}
        {ratingNo}
        {children}
    </div>

  )

}

export default Card;
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const cardData = [

    {  /* 1 obj is 1 item of Array*/
      imgCard: "/IMG/product1.jpg",
      pieces: "7-Piece",
      dollars: "$49.99",
      size: "Full/Queen",
      color: "Dusty White Blue",
      ratings: "⭐️⭐️⭐️⭐️☆",
      ratingNo: "419"
    },
    {
      imgCard: "/IMG/2.jpg",
      pieces: "8-Piece",
      dollars: "$55.99",
      size: "Extra Long",
      color: "GreyBlack",
      ratings: "⭐️⭐️⭐️☆☆",
      ratingNo: "288"
    },
    {
      imgCard: "/IMG/3.jpg",
      pieces: "5-Piece",
      dollars: "$30.00",
      size: "Twin/Twin XL",
      color: "RapunzelWhite",
      ratings: "⭐️⭐️⭐️⭐️☆",
      ratingNo: "128"
    },
    {
      imgCard: "/IMG/4.jpg",
      pieces: "Microfiber Duvet Cover Set",
      dollars: "$22.99",
      size: "Full/Queen",
      color: "Teal Grey",
      ratings: "⭐️⭐️⭐️⭐️☆",
      ratingNo: "629"
    },
    {
      imgCard: "/IMG/5.jpg",
      pieces: "Microfiber Sheet Set",
      dollars: "$19.99",
      size: "Queen",
      color: "Dark Gray",
      ratings: "⭐️⭐️⭐️⭐️☆",
      ratingNo: "14,193"
    },
    {
      imgCard: "/IMG/6.jpg",
      pieces: "5-Piece",
      dollars: "$38.99",
      size: "Twin/Twin XL",
      color: "Black White Stripe",
      ratings: "⭐️⭐️⭐️⭐️☆",
      ratingNo: "173"
    },
    {
      imgCard: "/IMG/7.jpg",
      pieces: "7-Piece",
      dollars: "$48.99",
      size: "Full/Queen",
      color: "Reversible Sea Green",
      ratings: "⭐️⭐️⭐️⭐️☆",
      ratingNo: "177"
    },
    {
      imgCard: "/IMG/8.jpg",
      pieces: "5-Piece",
      dollars: "$38.99",
      size: "Twin/Twin Extra-Long",
      color: "Pure White",
      ratings: "⭐️⭐️⭐️⭐️☆",
      ratingNo: "419"
    }
  ];

  return (
    <>
       {/* Har object ka data Card component ko props ke through diya ja raha hai. item is obj here and index is index of obj in an array*/}
      <div className="gridContainer">
       {cardData.map((item, index) => (  
        <Card
          key={index}
          imgCard={item.imgCard}
          pieces={item.pieces}
          dollars={item.dollars}
          size={item.size}
          color={item.color}
          ratings={item.ratings}
          ratingNo={item.ratingNo}
        >
          <button>ADD TO CART</button>
        </Card>
      ))}
      </div> 
    </>
  )
}

export default App

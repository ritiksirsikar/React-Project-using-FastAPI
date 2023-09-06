import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css"; // Import your custom CSS file
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Tshirts",
    description:
      "This is the softest and most comfortable t-shirt any guy will ever put on.",
    imageUrl:
      "https://www.trueclassictees.com/cdn/shop/products/COLOR_3PACK_585fb834-1307-47ee-b52a-20dbbbf08955.jpg?v=1657570179&%3Bwidth=500&em-format=avif&em-width=500",
  },
  {
    title: "Pants",
    description:
      "A super soft, stretchy slim-fit, for the ultimate feel-good experience ever.",
    imageUrl:
      "https://www.trueclassictees.com/cdn/shop/files/StapleSlimFitJeans3-Pack.jpg?v=1690924777&%3Bwidth=500&em-format=avif&em-width=500",
  },
  {
    title: "Caps",
    description:
      "TPremium hat, Moisture wicking, soft, strechable and sun protection.",
    imageUrl:
      "https://www.trueclassictees.com/cdn/shop/products/BLACKALLPURPOSE_3PACK.jpg?v=1657338272&%3Bwidth=500&em-format=avif&em-width=500",
  },
];

function MyCard() {
  const generateCards = () => {
    return cardData.map((card, index) => (
      <Card key={index} className="my-card">
        <Card.Img variant="top" src={card.imageUrl} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <div className="d-flex justify-content-center">
            {/* Use Link to navigate to the product details page */}
            <Link
              to={`/product/${card.title}/${
                card.description
              }/${encodeURIComponent(card.imageUrl)}`}
            >
              <Button variant="primary">More Info</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    ));
  };

  return <div className="my-card-container">{generateCards()}</div>;
}

export default MyCard;

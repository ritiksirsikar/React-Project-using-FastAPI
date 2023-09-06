import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { title, description, imageUrl } = useParams();

  return (
    <div className="productDetails-div">
      <Card className="productDetails-card">
        <Card.Img variant="top" src={decodeURIComponent(imageUrl)} />
        <Card.Body>
          <Card.Title>Product Details of {title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/buynow/${title}`}>
            <Button variant="primary">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetail;

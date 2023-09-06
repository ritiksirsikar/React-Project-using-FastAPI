import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BuyNow() {
  const { title } = useParams();
  return (
    <div className="container">
      <h2>Enter Credit Card Details {title}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Cardholder Name</label>
          <input type="text" className="form-control" id="cardName" required />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" className="form-control" id="cvv" required />
        </div>
        <Link to={`/thankyou/${title}`}>
          <Button variant="primary">Submit</Button>
        </Link>
      </form>
    </div>
  );
}

export default BuyNow;

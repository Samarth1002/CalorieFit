import React, { useState } from "react";

import { Row, Col, Container } from "reactstrap";
import { CartContext } from "../Context/context";
import MealCart from "./MealCart";
import MealStructure from "./MealStructure";
import MealData from "./MealData";
import CalculateCalories from "./CalculateCalories";

const MealSection = () => {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (card, card_id) => {
    const alreadyAdded = cartItem.findIndex((item) => {
      return item.id === card_id;
    });
    // console.log(alreadyAdded);
    if (alreadyAdded < 0) {
      setCartItem([...cartItem, card]);
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === card_id ? { ...item, Qty: item.Qty + 1 } : item
        )
      );
    }
  };

  const removeOneMeal = (item) => {
    setCartItem(
      cartItem.map((x) => (x.id === item.id ? { ...x, Qty: x.Qty - 1 } : x))
    );
  };

  const removeMeal = (item) => {
    setCartItem(cartItem.filter((currItem) => currItem.id !== item.id));
  };

  return (
    <CartContext.Provider value={MealData}>
      <Container>
        <Row className="py-5">
          <Col md="8">
            <MealStructure
              addInCart={addInCart}
              heading={"Here are your meals"}
            />
          </Col>
          <Col md="4">
            <MealCart
              cartItem={cartItem}
              removeMeal={removeMeal}
              addInCart={addInCart}
              removeOneMeal={removeOneMeal}
              heading={"Cart Items"}
            />
          </Col>
          <CalculateCalories cartItem={cartItem} />
        </Row>
      </Container>
    </CartContext.Provider>
  );
};

export default MealSection;

import React, { useState, useEffect } from "react";
import MealStructure from "../Components/MealStructure";
import MealCart from "../Components/MealCart";
import { Container, Row, Col } from "reactstrap";
import { lunchContext } from "../Context/context";
import LunchMealData from "../Components/LunchMealData";
import CalculateCalories from "../Components/CalculateCalories";
const LunchMealSection = () => {
  const [lunchCart, setLunchCart] = useState([]);

  const removeOneMeal = (item) => {
    setLunchCart(
      lunchCart.map((element) =>
        element.id === item.id
          ? element.Qty > 0
            ? { ...element, Qty: element.Qty - 1 }
            : element
          : element
      )
    );
  };

  const addInCart = (meal, meal_id) => {
    const isAvailable = lunchCart.findIndex((element) => {
      return element.id === meal_id;
    });

    if (isAvailable < 0) {
      setLunchCart([...lunchCart, meal]);
    } else {
      setLunchCart(
        lunchCart.map((element) =>
          element.id === meal_id
            ? { ...element, Qty: element.Qty + 1 }
            : element
        )
      );
    }
  };

  const removeMeal = (item) => {
    setLunchCart(lunchCart.filter((element) => element.id !== item.id));
  };
  useEffect(() => {
    let localStorageCart = localStorage.getItem("lunchCart");
    if (localStorageCart) {
      return setLunchCart(JSON.parse(localStorageCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lunchCart", JSON.stringify(lunchCart));
  }, [lunchCart]);

  return (
    <lunchContext.Provider value={LunchMealData}>
      <Container>
        <Row className="py-8 my-5">
          <Col md="8">
            <MealStructure
              addInCart={addInCart}
              heading={"the more, the less"}
              mealCart={lunchContext}
            />
          </Col>
          <Col md="4">
            <MealCart
              cartItem={lunchCart}
              removeMeal={removeMeal}
              removeOneMeal={removeOneMeal}
              addInCart={addInCart}
              heading={" basket"}
            />
          </Col>
        </Row>
        <Row>
          <Col md="8" className="offset-lg-2">
            <CalculateCalories cartItem={lunchCart} />
          </Col>
        </Row>
      </Container>
    </lunchContext.Provider>
  );
};

export default LunchMealSection;

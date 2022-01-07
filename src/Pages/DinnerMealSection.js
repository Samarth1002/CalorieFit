import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import MealCart from "../Components/MealCart";
import MealStructure from "../Components/MealStructure";
import { dinnerContext } from "../Context/context";
import CalculateCalories from "../Components/CalculateCalories";
import DinnerMealData from "../Components/DinnerMealData";

const DinnerMealSection = () => {
  const [dinnerCart, setDinnerCart] = useState([]);

  const removeOneMeal = (item) => {
    setDinnerCart(
      dinnerCart.map((element) =>
        element.id === item.id
          ? element.Qty > 0
            ? { ...element, Qty: element.Qty - 1 }
            : element
          : element
      )
    );
  };

  const addInCart = (meal, meal_id) => {
    const isAvailable = dinnerCart.findIndex((element) => {
      return element.id === meal_id;
    });

    if (isAvailable < 0) {
      setDinnerCart([...dinnerCart, meal]);
    } else {
      setDinnerCart(
        dinnerCart.map((element) =>
          element.id === meal_id
            ? { ...element, Qty: element.Qty + 1 }
            : element
        )
      );
    }
  };

  const removeMeal = (item) => {
    setDinnerCart(dinnerCart.filter((element) => element.id !== item.id));
  };

  useEffect(() => {
    let localCart = localStorage.getItem("dinnerCart");
    return localCart ? setDinnerCart(JSON.parse(localCart)) : [];
  }, []);

  useEffect(() => {
    localStorage.setItem("dinnerCart", JSON.stringify(dinnerCart));
  }, [dinnerCart]);

  return (
    <dinnerContext.Provider value={DinnerMealData}>
      <Container>
        <Row className="py-8 my-5">
          <Col md="8">
            <MealStructure
              addInCart={addInCart}
              heading={"time to freeze"}
              mealCart={dinnerContext}
            />
          </Col>

          <Col md="4">
            <MealCart
              cartItem={dinnerCart}
              removeMeal={removeMeal}
              removeOneMeal={removeOneMeal}
              addInCart={addInCart}
              heading={"basket"}
            />
          </Col>
        </Row>
        <Row>
          <Col md="8" className="offset-lg-2">
            <CalculateCalories cartItem={dinnerCart} />
          </Col>
        </Row>
      </Container>
    </dinnerContext.Provider>
  );
};

export default DinnerMealSection;

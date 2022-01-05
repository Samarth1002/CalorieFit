import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import { breakfastContext } from "../Context/context";
import BreakfastMealData from "../Components/BreakfastMealData";
import MealStructure from "../Components/MealStructure";
import CalculateCalories from "../Components/CalculateCalories";
import MealCart from "../Components/MealCart";

const BreakfastSection = () => {
  const [breakfastCart, setBreakfastCart] = useState([]);

  const addInCart = (meal, meal_id) => {
    const checkItem = breakfastCart.findIndex((item) => {
      return item.id === meal_id;
    });

    checkItem < 0
      ? setBreakfastCart([...breakfastCart, meal])
      : setBreakfastCart(
          breakfastCart.map((item) =>
            item.id === meal_id ? { ...item, Qty: item.Qty + 1 } : item
          )
        );
  };

  const removeOneMeal = (item) => {
    setBreakfastCart(
      breakfastCart.map((x) =>
        x.id === item.id ? (x.Qty > 0 ? { ...x, Qty: x.Qty - 1 } : x) : x
      )
    );
  };

  const removeMeal = (item) => {
    setBreakfastCart(
      breakfastCart.filter((currItem) => currItem.id !== item.id)
    );
  };

  useEffect(() => {
    let localStorageCart = localStorage.getItem("BreakfastCart");
    console.log("The LocalStorage is : ", localStorageCart);
    if (localStorageCart) {
      return setBreakfastCart(JSON.parse(localStorageCart));
    }

    
  }, []);

  useEffect(() => {
    localStorage.setItem("BreakfastCart", JSON.stringify(breakfastCart));
  }, [breakfastCart]);

  return (
    <breakfastContext.Provider value={BreakfastMealData}>
      <Container>
        <Row className=" py-8 my-5 ">
          <Col md="8">
            <MealStructure
              addInCart={addInCart}
              heading={" yep, morning style "}
              mealCart={breakfastContext}
            />
          </Col>

          <Col md="4">
            <MealCart
              cartItem={breakfastCart}
              removeMeal={removeMeal}
              removeOneMeal={removeOneMeal}
              addInCart={addInCart}
              heading={" basket "}
            />
          </Col>
        </Row>

        <Row>
          <Col md="8" className=" offset-lg-2 ">
            <CalculateCalories cartItem={breakfastCart} />
          </Col>
        </Row>
      </Container>
    </breakfastContext.Provider>
  );
};

export default BreakfastSection;

import React, { useContext } from "react";

import {
  Container,
  Row,
  Col,
  CardImg,
  CardBody,
  CardText,
  Card,
  Button,
  CardFooter,
} from "reactstrap";

// import { CartContext } from "../Context/context";

const MealStructure = ({ addInCart, heading, mealCart }) => {
  const product = useContext(mealCart);

  return (
    <Container>
      <h1 className="text-center text-warning commonFont">{heading}</h1>
      <Row>
        {product.map((meal) => (
          <Col md="4" key={meal.id} className="mb-3">
            <Card className="mb-2 p-1 cardHeight">
              <CardImg top height={210} width="100%" src={meal.path} />
              <CardBody className="text-center">
                <CardText className="text-center m-1 commonFont">
                  {meal.title}
                </CardText>

                <Button
                  color="warning"
                  className=" mt-1 mb-1"
                  onClick={() => addInCart(meal, meal.id)}
                >
                  ADD
                </Button>
              </CardBody>
              <CardFooter className="text-center commonFont">{`as per 100 grams`}</CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MealStructure;

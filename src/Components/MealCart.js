import React from "react";

import {
  Button,
  Row,
  Col,
  Container,
  CardImg,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const MealCart = ({
  cartItem,
  removeMeal,
  removeOneMeal,
  addInCart,
  heading,
}) => {
  return (
    <Container>
      <h1 className="text-center text-warning commonFont">{heading}</h1>

      <Row>
        {cartItem.map((item) => (
          <Col key={item.id} sm="6">
            <Card className="mb-1">
              <CardHeader className="text-center commonFont">
                {item.title}
              </CardHeader>
              <CardImg
                top
                height="100"
                width="100%"
                src={item.path}
                className="p-2"
              />
              <CardBody>
                <CardSubtitle className="text-center text-sucess">
                  <NavLink to={""}>
                    <FaArrowDown
                      className="p-1 m-2"
                      onClick={() => removeOneMeal(item)}
                    />
                  </NavLink>
                  {item.Qty}00g
                  <NavLink to={""}>
                    <FaArrowUp
                      className="p-1"
                      onClick={() => addInCart(item, item.id)}
                    />
                  </NavLink>
                </CardSubtitle>
              </CardBody>
            </Card>

            <Button
              block
              className="mb-3"
              color="warning"
              onClick={() => removeMeal(item)}
            >
              Clear
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MealCart;

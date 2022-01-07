import React, { useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Col, Container, ListGroupItem, ListGroup } from "reactstrap";
import { userAuthContext } from "../Context/context";
const CalculateCalories = ({ cartItem }) => {
  let amount = 0;
  let sum = 0;
  cartItem.forEach((element) => {
    amount = element.Qty * element.cal;
    sum = amount + sum;
  });

  const context = useContext(userAuthContext);

  
  return (
    <Container className="py-5">
      <h2 className="text-center text-warning commonFont">
        Here goes your Cart
      </h2>
      {context.user?.uid ? (
        <ListGroup>
          {cartItem.map((item) => (
            <ListGroupItem key={item.id}>
              <Row>
                <Col>
                  <img
                    height={80}
                    width={100}
                    src={item.path}
                    alt="Meal pic goes here"
                  />
                </Col>
                <Col className="text-center">
                  <div className="text-danger commonFont">{item.title}</div>
                  <span className="commonFont">{item.Qty * item.cal} Cal</span>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
          <div className="text-center m-1 p-1 text-warning commonFont fs-5 my-5">
            Total Calories Consumed : <strong>{sum} Cal </strong>
          </div>
        </ListGroup>
      ) : (
        <p className="text-center text-white">
          Please
          <NavLink
            tag={Link}
            to="/signin"
            className="p-1 text-white text-decoration-none"
          >
            <b>Signin</b>
          </NavLink>
          to check your personal Calories Consumption
        </p>
      )}
    </Container>
  );
};

export default CalculateCalories;

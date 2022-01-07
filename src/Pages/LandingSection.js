import React   from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
const LandingSection = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col className="adjustLandingButtons">
          <NavLink
            tag={Link}
            to="/breakfastmeal"
            className="text-black block navClass "
          >
            <Button className="p-1 mt-5 fs-5 btn-cntrl px-5 commonFont">
              Morning Route
            </Button>
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col className="adjustLandingButtons">
          <NavLink
            tag={Link}
            to="/lunchmeal"
            className="text-black navClass commonFont "
            activeclassname="true"
          >
            <Button className="p-1  fs-5 btn-cntrl px-5">Lunch Route</Button>
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col className="adjustLandingButtons">
          <NavLink
            tag={Link}
            to="/dinnermeal"
            className="text-black navClass commonFont "
            activeclassname="true"
          >
            <Button className="p-1 fs-5 btn-cntrl px-5">Dinner Route</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingSection;

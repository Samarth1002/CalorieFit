import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { NavLink, Link, Outlet } from "react-router-dom";

const MealLanding = () => {
  return (
    <Container>
      <Row>
        <Col md="12" className="text-center text-warning py-2">
          <Button>
            <NavLink
              id="RouterNavLink"
              tag={Link}
              to="/breakfastmeal"
              className="text-decoration-none "
            >
              Morning
            </NavLink>
          </Button>
        </Col>
        <Outlet />
      </Row>
      <Row>
        <Col md="12 " className="text-center text-warning py-2">
          <Button>
            <Link to="/launchmeal">Afternoon</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="text-center text-warning py-2">
          <Link to="/dinnermeal">
            <Button>Evening</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default MealLanding;

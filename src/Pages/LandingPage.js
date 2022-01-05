import React from "react";
import "../App.css";

import { Row, Col, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
// import { CgGym } from "react-icons/cg";

const LandingPage = ({ title }) => {
  return (
    <>
    

      <section className="container landingBack">
        <Row>
          <Col md="10" className="text-center offset-lg-1 my-5 ">
            <h1 className="text-center text-warning landingFont">{title}</h1>
          </Col>
        </Row>

        <div className="d-flex justify-content-center align-items-center">
          <NavLink
            tag={Link}
            to="/signin"
            className="text-black navClass "
            activeclassname="true"
          >
            <Button className="commonFont">Let's get Started</Button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

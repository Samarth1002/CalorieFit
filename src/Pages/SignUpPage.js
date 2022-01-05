import React, { useState, useContext } from "react";
import { userAuthContext } from "../Context/context";
import {
  Card,
  CardHeader,
  Form,
  CardBody,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

import { Navigate } from "react-router-dom";

// firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Context/firebaseConfig";
import { Alert } from "bootstrap";

const SignUpPage = () => {
  const context = useContext(userAuthContext);

  console.log("context: ", context);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [handleError, setHandleError] = useState(false);
  const [displayError, setDisplayError] = useState();

  const handleSignup = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((res) => {
        return context.setUser({
          email: res.user.email,
          uid: res.user.uid,
        });
      });
    } catch (error) {
      switch (error) {
        case "auth/email-already-exists":
          return <Alert>{error.message}</Alert>;

        case "auth/invalid-email":
          return <Alert>{error.message}</Alert>;
      }
      setHandleError(!handleError);
      // setDisplayError(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  if (context.user?.uid) {
    return <Navigate to="/landingsection" />;
  }

  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            {handleError && (
              <Alert color="warning">{displayError.message}</Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <CardHeader tag="h3" className="authFont">
                SignUp Here
              </CardHeader>
              <CardBody>
                {/* /*    <FormGroup row>
                   <Label for="fname" sm="3">
                    First Name
                  </Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter first name here"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      // onBlur={(e) => console.log("Blur effect triggered")}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="lname" sm="3">
                    Last Name
                  </Label>
                  <Col sm="8">
                    <Input
                      id="lname"
                      name="lname"
                      placeholder="Enter last name here"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </Col>
                </FormGroup> */}

                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter minimum 6 digit number"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button block color="warning" type="submit">
                  Signup
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;

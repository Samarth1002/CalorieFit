import React, { useState, useContext, useEffect } from "react";
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
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="eg abc@xyz.com"
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
                      placeholder="minimum 6 digits"
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

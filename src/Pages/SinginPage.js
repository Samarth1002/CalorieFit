import React, { useState, useContext } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Card,
  Button,
  CardFooter,
  CardBody,
  FormGroup,
  CardHeader,
  Label,
  Input,
  Alert,
} from "reactstrap";

import { Link, Navigate, NavLink } from "react-router-dom";

import { userAuthContext } from "../Context/context";

//firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Context/firebaseConfig";

const SinginPage = () => {
  const context = useContext(userAuthContext);

  // const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [handleError, setHandleError] = useState(false);

  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((res) =>
        context.setUser({
          email: res.user.email,
          uid: res.user.uid,
        })
      );
    } catch (error) {
      setHandleError(!handleError);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin();
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
              <Alert color="warning">
                Invalid <strong>Email ID</strong> or <strong>Password</strong>
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <CardHeader tag="h3" className="authFont">
                Hurry Up!
              </CardHeader>

              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={8}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
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
                      name="password"
                      id="password"
                      placeholder="Enter minimum 8 digit number"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button block color="warning ">
                  Signin
                </Button>
                <p className="text-muted tect-black m-2">
                  Not an existing member ?
                  <NavLink
                    tag={Link}
                    className="text-black navFontTwo"
                    to="/signup"
                  >
                    <span className="mx-1">Signup</span>
                  </NavLink>
                </p>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SinginPage;

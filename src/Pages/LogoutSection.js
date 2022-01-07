import React, { useContext } from "react";

// import { Link, NavLink } from "react-router-dom";
import { CardBody, CardHeader, Container, Card, Button } from "reactstrap";

//firebase imports
import { signOut } from "firebase/auth";
import { auth } from "../Context/firebaseConfig";
import { useNavigate, Navigate } from "react-router-dom";
import { userAuthContext } from "../Context/context";

const LogoutSection = () => {
  const context = useContext(userAuthContext);
  console.log("CONTEXT IS: ", context);
  const navigate = useNavigate();

  // const handleCancelButton = () => {
  //   return <p className="text-white py-5 my-6">Hope you are Enjoying</p>;
  // };

  const handleYesButton = () => {
    signOut(auth)
      .then((res) => context.setUser(null))
      .catch((err) => console.log("error while logging out is :", err));
  };

  if (!context.user?.uid) {
    localStorage.clear();
  }
  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }

  return (
    <Container className="py-4 ">
      <Card>
        <CardHeader className="text-center">Are you sure to logout?</CardHeader>
        <CardBody className="text-center d-flex justify-content-center ">
          <Button className="text-center mx-auto" onClick={() => navigate(-1)}>
            CANCEL
          </Button>
          <Button className="text-center mx-auto" onClick={handleYesButton}>
            YES
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default LogoutSection;

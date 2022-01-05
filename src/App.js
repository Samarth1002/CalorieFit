import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// TRY USING #101820FF for bg & for remaining #F2AA4CFF .

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userAuthContext } from "./Context/context";

// Pages
import LandingPage from "./Pages/LandingPage";
import SignUpPage from "./Pages/SignUpPage";
import SinginPage from "./Pages/SinginPage";
import MealSection from "./Components/MealSection";
// import MealStructure from "./Components/MealStructure";
import NavbarSection from "./Components/NavbarSection";
import FooterSection from "./Components/FooterSection";
import LogoutSection from "./Pages/LogoutSection";
import BreakfastMealSection from "./Pages/BreakfastMealSection";
import LunchMealSection from "./Pages/LunchMealSection";
import DinnerMealSection from "./Pages/DinnerMealSection";
import LandingSection from "./Pages/LandingSection";

const App = () => {
  const [user, setUser] = useState(null);
  console.log("User:", user);
  console.log("userAuthContext: ", userAuthContext);
  return (
    <userAuthContext.Provider value={{ user, setUser }}>
      <Router>
        <NavbarSection />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                title={
                  "Embrace and love your body. It's the most amazing thing you will ever own."
                }
              />
            }
          />
          <Route path="landingsection" element={<LandingSection />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SinginPage />} />
          <Route path="mealsection" element={<MealSection />} />
          <Route path="breakfastmeal" element={<BreakfastMealSection />} />
          <Route path="lunchmeal" element={<LunchMealSection />} />
          <Route path="dinnermeal" element={<DinnerMealSection />} />
          <Route path="logoutsection" element={<LogoutSection />} />
        </Routes>
        <FooterSection />
      </Router>
    </userAuthContext.Provider>
  );
};

export default App;

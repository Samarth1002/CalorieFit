import SET_CONTACT from "./reducer";
import UPADTE_CONTACT from "./reducer";
import SET_LOADING from "./reducer";
import SET_SINGLE_CONTACT from "./reducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return action.type === null
        ? {
            ...state,
            contacts: [],
          }
        : {
            ...state,
            contacts: action.payload,
          };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case UPADTE_CONTACT:
      return {
        ...state,
        updateContact: action.payload,
        updateContactKey: action.key,
      };

    case SET_SINGLE_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    default:
      return state;
  }
};

// Cart context
// import React from "react";
// import MealSection from "../Components/MealSection";
// import MealData from "../Components/MealData";
// import CartContext from "./context";
// import MealStructure from "../Components/MealStructure";

// const ContextCart = () => {
//   return (
//     <CartContext.Provider value={MealData}>
//       <MealSection />
//       <MealStructure />
//     </CartContext.Provider>
//   );
// };

// export default ContextCart;

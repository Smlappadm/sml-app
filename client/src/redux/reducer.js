import {
  GET_ALL_EMPLOYEES
  } from "./actions";
  
  const initialState = {
    employees: [],
  };
  
  const rootReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case GET_ALL_EMPLOYEES:
        return { ...state};
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;

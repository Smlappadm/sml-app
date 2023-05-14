import { GET_ALL_LEAD, GET_LEAD_UNCHECKED, GET_LEAD_CHEQUED,GET_LEAD_UNCHECKED_10 } from "./actions";

const initialState = {
  lead: [],
  leadChequed: [],
  leadUnchecked: [],
  leadUnchecked10: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LEAD:
      return {
        ...state,
        lead: action.payload,
      };
    case GET_LEAD_UNCHECKED:
      return {
        ...state,
        leadUnchecked: action.payload,
      };
    case GET_LEAD_UNCHECKED_10:
      return {
        ...state,
        leadUnchecked10: action.payload,
      };
    case GET_LEAD_CHEQUED:
      return {
        ...state,
        leadChequed: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;

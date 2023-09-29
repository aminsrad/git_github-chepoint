import { CREATE_CONTACTUS, GET_CONTACTUS } from "../actions/types";
const initialState = {
  contactus_s: [],
};

export const contactusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTUS:
      return {
        ...state,
        contactus_s: action.payload,
      };
    case CREATE_CONTACTUS:
      return {
        ...state,
        contactus_s: [...state.contactus_s, action.payload],
      };

    default:
      return state;
  }
};
export default contactusReducer;

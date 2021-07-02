import {
    CASE
} from "../action/caseCover";

const initState = {
    case: null,
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case CASE:
            return {
                ...state,
                case: payload,
            };
      default:
        return state;
    }
  };
import {
    CASE, ALL_COVER
} from "../action/caseCover";

const initState = {
    case: null,
    allCover: null,
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case CASE:
            return {
                ...state,
                case: payload,
            };
        case ALL_COVER:
            return {
                ...state,
                allCover: payload,
            };
      default:
        return state;
    }
  };
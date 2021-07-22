import {
    CASE, ALL_COVER, MODAL_COVER, PRICE_COVER
} from "../action/caseCover";

const initState = {
    case: null,
    allCover: null,
    modalaCover: null,
    price: 0,
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
        case MODAL_COVER: 
            return {
                ...state,
                modalaCover: payload,
            };
        case PRICE_COVER: 
            return {
                ...state,
                price: payload,
            };
      default:
        return state;
    }
  };
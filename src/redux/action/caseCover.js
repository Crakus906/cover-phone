import { api } from "../../constants/api";

export const CASE = "CASE";
export const ALL_COVER = "ALL_COVER";
export const MODAL_COVER = "MODAL_COVER";
export const PRICE_COVER = "PRISE_COVER";

export const getCase = (e) => ({ type: CASE, payload: e });
export const getAllCover = (e) => ({ type: ALL_COVER, payload: e });
export const getModalCover = (e) => ({type: MODAL_COVER, payload: e });
export const priceCover = (e) => ({type: PRICE_COVER, payload: e });

export const caseCover = () => async (dispatch) => {
    const res = await api.get("category/case");
    dispatch(getCase(res.data));
};

export const allCover = (e) => async (dispatch) => {
    const res = await api.get(`category/${e}`);
    dispatch(getAllCover(res.data));
};

export const modalCover = (slug, value) => async (dispatch) => {
    const res = await api.get(`category/${slug}/type/${value}`);
    dispatch(getModalCover(res.data));
};
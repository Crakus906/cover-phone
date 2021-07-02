import { api } from "../../constants/api";

export const CASE = "CASE";

export const getCase = (e) => ({ type: CASE, payload: e });

export const caseCover = () => async (dispatch) => {
    const res = await api.get("category/case");
    dispatch(getCase(res.data.results[0]));
};
import { api } from "../../constants/api";

export const APPLE = "APPLE";

export const getAplle = (e) => ({ type: APPLE, payload: e });

export const apple = () => async (dispatch) => {
    const res = await api.get("category/apple");
    dispatch(getAplle(res.data.results));
};
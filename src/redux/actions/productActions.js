import axios from 'axios';
import * as actionTypes from '../constants/productConstant';

const URL = "http://localhost:7000";

export const getProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
        const { data } = response;

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        if (error.response) {
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response.data });
        } else if (error.request) {
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: 'No response from server' });
        } else {
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
        }
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/product/${id}`);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
    }
};

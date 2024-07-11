import axios from './FactoryUtility';
import { API_BEGIN_TEXT } from "../constants";

const ENDPOINTS = {
    creditData: (param) => `${API_BEGIN_TEXT}/credit/${param}`,
    stockData: (param) => `${API_BEGIN_TEXT}/stock/${param}`,
    creditList: () => `${API_BEGIN_TEXT}/credit`,
    stockList: () => `${API_BEGIN_TEXT}/stock`,
}

export const getCreditDataAPI = (param) => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.creditData(param))
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

export const getStockDataAPI = (param) => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.stockData(param))
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}
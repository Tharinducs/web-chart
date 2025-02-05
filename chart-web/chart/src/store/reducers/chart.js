import * as actionTypes from "../actions/actionTypes"

const initialState = {
    creditData: [],
    stockData: [],
    currentFilterStockData: {},
    currentFilterCreditData: {},
    loadingStock: false,
    loadingCredit: false
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_CREDIT_DATA:
            return {
                ...state,
                creditData: [...action.creditData],
                currentFilterCreditData: { ...action.creditData[0] }
            };
        case actionTypes.LOAD_STOCK_DATA:
            return {
                ...state,
                stockData: [...action.stockData],
                currentFilterStockData: { ...action.stockData[0] }
            };
        case actionTypes.GET_CURRENT_FILTER_CREDIT_DATA:
            return {
                ...state,
                currentFilterCreditData: { ...action.currentFilterCreditData }
            };
        case actionTypes.GET_CURRENT_FILTER_STOCK_DATA:
            return {
                ...state,
                currentFilterStockData: { ...action.currentFilterStockData }
            };
        case actionTypes.LOADING_STOCK_DATA:
            return {
                ...state,
                loadingStock: action.loadingStock
            };
        case actionTypes.LOADING_CREDIT_DATA:
            return {
                ...state,
                loadingCredit: action.loadingCredit
            };
        default:
            return state;
    }
}
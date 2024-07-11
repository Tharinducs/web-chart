
import * as actionTypes from './actionTypes'

export const loadingCreditData = (payload) => {
    console.log(payload,"payload")
    return {
        type: actionTypes.LOADING_CREDIT_DATA,
        loadingCredit: payload
    }
}

export const loadingStockData = (payload) => {
    return {
        type: actionTypes.LOADING_STOCK_DATA,
        loadingStock: payload
    }
}

export const setStockData = (payload) => {
    return {
        type: actionTypes.LOAD_STOCK_DATA,
        stockData: payload
    }
}

export const setCreditData = (payload) => {
    return {
        type: actionTypes.LOAD_CREDIT_DATA,
        creditData: payload
    }
}


export const setstockCurrentData = (payload) => {
    return {
        type: actionTypes.GET_CURRENT_FILTER_STOCK_DATA,
        currentFilterStockData: payload
    }
}

export const setCreditCurrentData = (payload) => {
    return {
        type: actionTypes.GET_CURRENT_FILTER_CREDIT_DATA,
        currentFilterCreditData: payload
    }
}



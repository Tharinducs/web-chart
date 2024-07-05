
import * as actionTypes from './actionTypes'

export const loadingCreditData = (payload) => {
    return {
        type: actionTypes.LOADING_CREDIT_DATA,
        loadingCredit: payload
    }
}

export const loadingStockData = (payload) => {
    return {
        type: actionTypes.LOADING_STOCK_DATA,
        loadingCredit: payload
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


export const setstockCurrentData = (filterValue = '6M', data = []) => {
    let filteredValue = {}
    const filteredData = data.filter((item) => item.value === filterValue)
    if (filteredData.length > 0) {
        filteredValue = filteredData[0]
    }
    return {
        type: actionTypes.GET_CURRENT_FILTER_STOCK_DATA,
        currentFilterStockData: filteredValue
    }
}

export const setCreditCurrentData = (filterValue = '6M', data = []) => {
    let filteredValue = {}
    const filteredData = data.filter((item) => item.value === filterValue)
    if (filteredData.length > 0) {
        filteredValue = filteredData[0]
    }
    return {
        type: actionTypes.GET_CURRENT_FILTER_CREDIT_DATA,
        currentFilterCreditData: filteredValue
    }
}



import { dispatch } from '../index'
import * as actionCreators from '../actions/chart'
import { getCreditDataAPI, getStockDataAPI } from '../../api/chart'
import { get } from 'lodash';

export const getCreditData = async (param) => {
    dispatch(actionCreators.loadingCreditData(true))
    try {
        const res = await getCreditDataAPI(param);
        let data = get(res,'data',[])
        if(data.length > 0){
            dispatch(actionCreators.setCreditCurrentData(data[0]))
        }else{
            dispatch(actionCreators.setCreditCurrentData({}))
        }
    } catch (error) {
        
        console.log(error)
    }
    finally {
        dispatch(actionCreators.loadingCreditData(false))
    }
}

export const getStockData = async (param) => {
    dispatch(actionCreators.loadingStockData(true))
    try {
        const res = await getStockDataAPI(param);
        let data = get(res,'data',[])
        if(data.length > 0){
            dispatch(actionCreators.setstockCurrentData(data[0]))
        }else{
            dispatch(actionCreators.setstockCurrentData({}))
        }
    } catch (error) {
        console.log(error)
    }
    finally {
        dispatch(actionCreators.loadingStockData(false))
    }
}
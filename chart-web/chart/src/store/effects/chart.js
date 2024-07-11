import { dispatch } from '../index'
import * as actionCreators from '../actions/chart'

export const getCreditData = () => {
    const creditData = [
        { value: '6M', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], weightedBond: '1.89 BSD', asOf: '2024/05/24' },
        { value: '12M', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], weightedBond: '1.89 BSD', asOf: '2024/05/24' },
        { value: '3Y', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], weightedBond: '1.89 BSD', asOf: '2024/05/24' },
        { value: '5Y', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], weightedBond: '1.89 BSD', asOf: '2024/05/24' },
        { value: 'FYTD', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], weightedBond: '1.89 BSD', asOf: '2024/05/24' }]
    dispatch(actionCreators.setCreditData(creditData))
}

export const getStockData = () => {
        const creditData = [
            { value: '6M', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], latestPrice: '450.95 USD', asOf: undefined },
            { value: '12M', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], latestPrice: '450.95 USD', asOf: undefined },
            { value: '3Y', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], latestPrice: '450.95 USD', asOf: undefined },
            { value: '5Y', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], latestPrice: '450.95 USD', asOf: undefined },
            { value: 'FYTD', chartData: [{ date: "01/24", value: 10 }, { date: "03/24", value: 150.30 }, { date: "04/20", value: 250 }, { date: "04/30", value: 430 }, { date: "05/10", value: 420.95 }, { date: "05/24", value: 450.95 }], latestPrice: '450.95 USD', asOf: undefined }]
        dispatch(actionCreators.setStockData(creditData))
}
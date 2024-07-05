import * as actionTypes from "./actionTypes"

export const loadCompanyList = () =>{
    return {
        type: actionTypes.LOAD_COMPANY_LIST,
        companyList : [{
            id:1,
            name: 'MSFT - Microsoft Coparation',
            country:'United States',
            industry:'Information Technology'
        }]
    }
}

export const selectCompany = (payload) =>{
    return {
        type: actionTypes.SELECT_COMPANY,
        company: payload
    }
}
import * as actionTypes from "../actions/actionTypes"

const initialState = {
    companyList: [],
    company: undefined
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.LOAD_COMPANY_LIST:
            return {
                ...state,
                companyList: action.companyList
            };
        case actionTypes.SELECT_COMPANY:
            return {
                ...state,
                company: action.company
            };
        default :
            return state;
    }
}
import {init} from '@rematch/core'
import { CLEAR_ALL } from './actions/actionTypes';
import companyReducer from './reducers/company';

const reducers = {
  company: companyReducer,
}

const middlewares = []

const store = init({
    redux:{
      middlewares,
      reducers,
      rootReducers:{
        [CLEAR_ALL] : () => undefined,
        ...{
            __INIT_STATE : (state,action) => ({...state,...action.payload})
        }
      }, 
    },
    plugins:[]
})

export const {dispatch,getState} = store;

export default store;
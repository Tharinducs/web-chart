import {init} from '@rematch/core'
import { CLEAR_ALL } from './actions/actionTypes';
import chartReducer from './reducers/chart';

const reducers = {
  chart: chartReducer,
}

const store = init({
    redux:{
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
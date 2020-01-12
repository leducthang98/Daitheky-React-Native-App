import { combineReducers } from 'redux'
import LoginReducer from './loginReducer'
import SellReducer from './sellReducer'
import RentReducer from './rentReducer'


export default combineReducers({
    loginReducer: LoginReducer,
    sellReducer: SellReducer,
    rentReducer: RentReducer,

})
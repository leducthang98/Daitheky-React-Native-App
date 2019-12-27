import { combineReducers } from 'redux'
import LoginReducer from './loginReducer'
import SellReducer from './sellReducer'



export default combineReducers({
    loginReducer: LoginReducer,
    sellReducer: SellReducer
})
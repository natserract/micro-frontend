import { combineReducers } from 'redux'
import userReducer from './reducers/user.reducer'

export default combineReducers({
    user: userReducer,
})
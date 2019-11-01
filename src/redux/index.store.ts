
import { createStore } from 'redux'
import RootReducer from './rootReducer'

const store = createStore(
    RootReducer
)

export default store
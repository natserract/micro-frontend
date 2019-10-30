
import { createStore } from 'redux'
import RootReducer from './rootReducer'

const store = createStore(
    RootReducer
)

console.log(store.getState());

export default store
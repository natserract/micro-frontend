import { INCREMENT, DECREMENT, RESET } from '../action/action'

interface State {
  count: number
}

// Action reducer
type Action = 
  { type: 'INCREMENT' } | 
  { type: 'DECREMENT' } | 
  { type: 'RESET' };


const Counter = (state = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state+1;
    default:
      return state
  }
}


export default Counter
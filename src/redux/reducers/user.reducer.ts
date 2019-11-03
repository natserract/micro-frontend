import { INCREMENT, DECREMENT, RESET } from '../action/action'

interface State {
  count: number
}
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' }

const Counter = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}


export default Counter
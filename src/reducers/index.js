import { combineReducers } from 'redux'


// REDUCERS
import testReducer from '../testReducer'


export default function rootReducer() {
  return combineReducers({
    test: testReducer
  })
}
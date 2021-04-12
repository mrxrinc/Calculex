import initialState from '../store/initialState'
import * as testConstants from '../constants/testConstants'



export default function testReducer(state = initialAState.test, action) {

  switch(action.type) {

    case TEST_CONSTANT:
      return {
        ...action.payload
      }

    default:
      return state
  }
  
}
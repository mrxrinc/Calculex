
import { TEST_CONSTANT } from '../constants/testConstants'



export default testAction = payload => ({
  type: TEST_CONSTANT,
  ...payload
})
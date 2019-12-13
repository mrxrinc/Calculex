import { IOS, window } from '../../assets'

export default {
  body: {
    width: (window.width / 4)*3,
    flex: 3/4
  },
  handleWrapper: {
    height: IOS ? 120 : 110,
    width: IOS ? 80 : 60,
  },
  handle: {
    width: '100%',
    position: 'absolute',
    top: 0,
    alignItems: 'center'
  }
}
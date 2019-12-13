import { IOS } from '../../assets'

export default {
  handleWrapper: {
    width: IOS ? 120 : 110,
    height: IOS ? 80 : 60,
    position: 'absolute',
    right: -10,
    bottom: IOS ? -80 : -60
  },
  handle: {
    width: '100%',
    position: 'absolute',
    top: 0,
    alignItems: 'center'
  },
  defaultContent: {
    maxHeight: 200,
    paddingRight: 20,
    paddingVertical: 10
  }
}
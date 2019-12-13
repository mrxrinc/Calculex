import { Dimensions, Platform } from 'react-native'

export const window = Dimensions.get('window')

export const IOS = Platform.select({
  ios: true,
  android: false
})
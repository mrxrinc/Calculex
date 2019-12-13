import { StyleSheet } from 'react-native'
import { IOS, window } from '../assets'

export const pallete = {
  primary: '#FFD43A',
  accent: '#DEE2E3',
  darkAccent: '#D9B430',
  black: '#000000aa'
}


export default StyleSheet.create({
  primary: { color: pallete.primary },
  bgPrimary: { backgroundColor: pallete.primary },
  accent: { color: pallete.accent },
  bgAccent: { backgroundColor: pallete.accent },
  black: { color: pallete.black },
  bgBlack: { backgroundColor: pallete.black },
  font:{ 
    fontFamily: 'EncodeSansExpanded-Regular'
  },
  bold:{ 
    fontFamily: 'EncodeSansExpanded-Bold'
  },
  wrapper: { 
    backgroundColor: pallete.darkAccent
  },

  header: {
    flex: 1
  },
  body: {
    flex: 3
  }
})

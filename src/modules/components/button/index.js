import React from 'react'
import {
  TouchableOpacity
} from 'react-native'
import { Text, Icon } from '../font'
import r from '../../mainStyles/rinc'

export default Button = props => (
  <TouchableOpacity
    style={[r.full, r.center, props.style]}
    activeOpacity={props.activeOpacity}
    onPress={props.press}
  >
    {props.icon ? (
      <Icon name={props.icon} size={20} style={[props.white && r.white]}/>
    ) : (
      <Text size={30} style={[props.white && r.white]}>{props.title}</Text>
    )}
  </TouchableOpacity>
)
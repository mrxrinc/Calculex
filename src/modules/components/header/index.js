import React, { Component, Fragment } from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import r from '../../mainStyles/rinc'
import g, { pallete } from '../../mainStyles/general'
import s from './style'
import { Text, Icon, MaterialIcon } from '../font'
import { IOS } from '../../assets'

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <View style={[g.bgPrimary, r.full, this.props.style]}>
          <View style={[s.defaultContent, r.full, r.center, r.rightItems]}>
            <Text size={22} style={[g.black]}>25 + 456 + 322 - 9389</Text>
            <Text bold size={40} style={[g.black, r.topM10]}>
              54333.3
            </Text>
          </View>
        </View>
        <View style={[s.handleWrapper]}>
          <View style={[s.handle]}>
            <Icon name={'handle'} size={IOS ? 80 : 60} style={[g.primary]} />
          </View>
          <TouchableOpacity
            style={[r.full, r.center, IOS ? r.topP25 : r.topP15]}
          >
            <MaterialIcon name={'history'} color={'#fff'} size={IOS ? 35 : 25} />
          </TouchableOpacity>
        </View>
      </Fragment>
    )
  }
}

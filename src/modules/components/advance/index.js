import React, { Component, Fragment } from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import r from '../../mainStyles/rinc'
import g, { pallete } from '../../mainStyles/general'
import s from './style'
import { Text, Icon, MaterialIcon } from '../font'
import { IOS, window } from '../../assets'

export default class Advance extends Component {
  render() {
    return (
      <View style={[r.full, r.absolute, r.whFull, r.rtl, r.f]}>
        <View style={[s.body, g.bgAccent]}>
          <View style={[r.full, r.row]}>
            <View style={[r.full]}>
              <View style={[r.full]}>
                <Button 
                  title='7'
                  press={() => buttonAction(7)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='4'
                  press={() => buttonAction(4)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='1'
                  press={() => buttonAction(1)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='Del'
                  press={() => buttonAction('del')}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  icon='divide'
                  press={() => buttonAction('divide')}
                />
              </View>
            </View>

            <View style={[r.full]}>
              <View style={[r.full]}>
                <Button 
                  title='8'
                  press={() => buttonAction(8)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='5'
                  press={() => buttonAction(5)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='2'
                  press={() => buttonAction(2)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='0'
                  press={() => buttonAction('0')}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  icon='multiply'
                  press={() => buttonAction('multiply')}
                />
              </View>
            </View>

            <View style={[r.full]}>
              <View style={[r.full]}>
                <Button 
                  title='9'
                  press={() => buttonAction(9)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='6'
                  press={() => buttonAction(6)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='3'
                  press={() => buttonAction(3)}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  title='.'
                  press={() => buttonAction('point')}
                />
              </View>
              <View style={[r.full]}>
                <Button 
                  icon='minus'
                  press={() => buttonAction('minus')}
                />
              </View>
            </View>
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
      </View>
    )
  }
}

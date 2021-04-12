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
import Button from '../button'
import { buttonAction } from '../../utils'

export default class Body extends Component {
  
  render() {

    const _ds = {
      col_01: ['7' , '4', '1', 'Del', 'divide'],
      col_02: ['8', '5', '2', '0', 'multiply'],
      col_03: ['9', '6', '3', '.', 'minus']
    }

    return (
      <Fragment>
        <View style={[g.bgWhite, r.full, r.row, this.props.style]}>
          <View style={[r.full, r.row]}>

            { // handeling the buttons
              Object.entries(_ds).map(
                ([key, btns]) => (
                  <View key={key} style={[r.full]}>
                    {
                      btns.map((el, i) => (
                        <View key={i} style={[r.full]}>
                          {
                            el.length === 1
                              ? <Button title={el} press={() => buttonAction(el)} />
                              : el === 'Del' 
                                ? <Button title={el} press={() => buttonAction(String(el).toLowerCase())} />
                                : <Button icon={el} press={() => buttonAction(el)} />
                          }
                        </View>
                      ))
                    }
                  </View>
                )
              )
            }

            <View style={[r.full]}>
              <View style={[{ flex: 2 }]}>
                <View style={[r.full, r.f]} />
                <View  style={[r.full,r.center, r.d]}>
                <Icon name={'left'} />
                </View>
              </View>

              <View style={[r.hP10, r.vP20, { flex: 2 }]}>
                <Button 
                  icon='equal'
                  white
                  style={s.equal}
                  activeOpacity={0.5}
                  press={() => buttonAction('equal')} />
              </View>

              <View style={[r.full]}>
                <Button 
                  icon='plus'
                  press={() => buttonAction('plus')} />
              </View>
            </View>

          </View>

        </View>
      </Fragment>
    )
  }
}
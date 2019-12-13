import React, { Component } from 'react'
import { Text as RefText } from 'react-native'
import MaterialIconsRaw from 'react-native-vector-icons/MaterialIcons'
import g from '../../mainStyles/general'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontIconConfig from '../../assets/FontIconConfig.json'
const FontIcon = createIconSetFromFontello(fontIconConfig)

export class Text extends Component {
  render() {
    return (
      <RefText
        {...this.props}
        style={[
          this.props.bold ? g.bold : g.font,
          {
            fontSize: this.props.size,
            height: this.props.height,
            lineHeight: this.props.lineHeight,
          },
          this.props.style,
        ]}
      >
        {this.props.children}
      </RefText>
    )
  }
}

export class Icon extends Component{
  render(){
    return(
      <FontIcon {...this.props} />
    )
  }
}

export const MaterialIcon = MaterialIconsRaw

import React, { Fragment } from 'react'
import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native'
import r from '../mainStyles/rinc'
import g, { pallete } from '../mainStyles/general'
import Header from '../components/header'
import Body from '../components/body'
import Advance from '../components/advance'

import { Text, Icon, MaterialIcon } from '../components/font'

const Calculex = () => {
  return (
    <Fragment>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={pallete.darkAccent} />
      <SafeAreaView style={[r.full, g.wrapper]}>
        <View style={[r.full, r.bgWhite]}>
          <View style={[g.header]}>
            <Header />
          </View>
          <View style={[g.body]}>
            <Body />
            <Advance />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};


export default Calculex;

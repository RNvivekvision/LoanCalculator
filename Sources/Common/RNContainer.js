import React from 'react';
import { StatusBar, View } from 'react-native';
import { Colors } from '../Theme';
import RNStyles from './RNStyles';

const RNContainer = ({ style, children }) => {
  return (
    <View style={[RNStyles.container, style]}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={Colors.Transparent}
      />
      {children}
    </View>
  );
};

export default RNContainer;

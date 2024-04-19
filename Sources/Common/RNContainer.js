import React from 'react';
import { StatusBar, View } from 'react-native';
import { Colors } from '../Theme';
import RNStyles from './RNStyles';
import RNLoader from './RNLoader';

const RNContainer = ({ style, children, isLoading }) => {
  return (
    <View style={[RNStyles.container, style]}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={Colors.Transparent}
      />
      <RNLoader visible={isLoading} />
      {children}
    </View>
  );
};

export default RNContainer;

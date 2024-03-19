import React from 'react';
import { View } from 'react-native';
import { Colors } from '../Theme';

const RNDevider = ({ style }) => {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: Colors.Black + '20',
        ...style,
      }}
    />
  );
};

export default RNDevider;

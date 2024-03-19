import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RNKeyboardAvoid, RNStyles } from './index';
import { useInset } from '../Hooks';
import { hp } from '../Theme';

const RNScrollView = ({ style, top, children, scrollProps }) => {
  const styles = useStyles();
  return (
    <RNKeyboardAvoid>
      <ScrollView
        contentContainerStyle={top ? styles.top : styles.bottom}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        {...scrollProps}>
        <View style={[RNStyles.container, style]}>{children}</View>
      </ScrollView>
    </RNKeyboardAvoid>
  );
};

const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    bottom: {
      paddingBottom: inset.bottom + hp(2),
      paddingVertical: hp(2),
    },
    top: {
      paddingTop: inset.top + hp(2),
      paddingVertical: hp(2),
    },
  });
};

export default RNScrollView;

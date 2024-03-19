import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
const RNKeyboardAvoid = ({ children, ios, android, offSet, style }) => {
  return (
    <KeyboardAvoidingView
      style={style || { flex: 1 }}
      behavior={Platform.OS == 'ios' ? ios || 'padding' : android || 'height'}
      keyboardVerticalOffset={offSet}>
      {children}
    </KeyboardAvoidingView>
  );
};
export default RNKeyboardAvoid;

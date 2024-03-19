import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
const RNInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    placeholderTextColor,
    style,
    onChangeText,
    onSubmitEditing,
    onEndEditing,
    onFocus,
    onBlur,
    keyboardType,
    returnKeyType,
    secureTextEntry,
    value,
    textAlign,
    maxLength,
    onChange,
    onKeyPress,
    editable,
    multiline,
    numberOfLines,
    spellCheck,
  } = props;
  return (
    <TextInput
      ref={ref}
      editable={editable}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor ?? Colors.Placeholder}
      style={[styles.input, style]}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onEndEditing={onEndEditing}
      onFocus={onFocus}
      onBlur={onBlur}
      keyboardType={keyboardType || 'default'}
      returnKeyType={returnKeyType || 'next'}
      secureTextEntry={secureTextEntry || false}
      value={value}
      textAlign={textAlign || 'left'}
      textAlignVertical={'center'}
      autoCorrect={false}
      spellCheck={spellCheck ?? true}
      autoCapitalize={'none'}
      maxLength={maxLength}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
    marginVertical: hp(1),
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Regular,
    color: Colors.Black,
  },
});
export default RNInput;

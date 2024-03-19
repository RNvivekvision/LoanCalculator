import React from 'react';
import { Text } from 'react-native';
import { Colors, FontFamily, FontSize } from '../Theme';
const RNText = ({
  children,
  style,
  numOfLines,
  size,
  family,
  weight,
  align,
  color,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHorizontal,
  pVertical,
  spacing,
  textLine,
  onPress,
  ...restProps
}) => {
  const TextStyles = {
    color: color ?? Colors.Black,
    fontSize: size ?? FontSize.font16,
    fontFamily: family ?? FontFamily.Regular,
    textAlign: align ?? 'left',
    fontWeight: weight,
    paddingTop: pTop,
    paddingLeft: pLeft,
    paddingRight: pRight,
    paddingBottom: pBottom,
    paddingHorizontal: pHorizontal,
    paddingVertical: pVertical,
    textDecorationLine: textLine,
    letterSpacing: spacing,
  };
  return (
    <Text
      onPress={onPress}
      numberOfLines={numOfLines}
      style={[TextStyles, style]}
      {...restProps}>
      {children}
    </Text>
  );
};
export default RNText;

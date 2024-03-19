import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNInput, RNStyles, RNText, RNIcon } from '../Common';
import { Colors, hp, wp } from '../Theme';

const HMInput = forwardRef(
  ({ title, icon, onIconPress, error, containerStyle, ...rest }, ref) => {
    const styles = useStyles({ error });
    return (
      <View style={[styles.container, containerStyle]}>
        {title && <RNText style={styles.title}>{title}</RNText>}
        {
          <View style={styles.inputContainer}>
            <RNInput
              ref={ref}
              placeholderTextColor={error ? Colors.Error : Colors.Placeholder}
              style={styles.input}
              {...rest}
            />
            {icon && (
              <RNIcon
                icon={icon}
                iconStyle={styles.icon}
                onPress={onIconPress}
                containerStyle={styles.IconContainer}
              />
            )}
          </View>
        }
      </View>
    );
  },
);

const useStyles = ({ error }) => {
  return StyleSheet.create({
    container: {
      paddingTop: hp(2),
    },
    title: {
      color: error ? Colors.Error : Colors.Placeholder,
    },
    inputContainer: {
      ...RNStyles.flexRow,
      backgroundColor: Colors.PlaceholderBackground,
      paddingHorizontal: wp(4),
      paddingVertical: hp(0.7),
      borderRadius: wp(3),
      marginTop: hp(1),
    },
    input: {
      flex: 1,
      marginVertical: 0,
      paddingHorizontal: 0,
      color: error ? Colors.Error : Colors.N054579,
    },
    IconContainer: {
      ...RNStyles.center,
      width: wp(8),
      height: wp(8),
      marginLeft: wp(1),
    },
    icon: {
      ...RNStyles.image60,
      tintColor: error ? Colors.Error : Colors.Button,
    },
  });
};

export default HMInput;

import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNStyles, RNIcon, RNInput } from '../Common';
import { Colors, hp, wp } from '../Theme';
import { Images } from '../Constants';

const HMSearchFilter = forwardRef(
  (
    {
      icon = Images.Search,
      onFilterPress,
      onSearchIconPress,
      containerStyle,
      ...rest
    },
    ref,
  ) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={styles.inputContainer}>
          {icon && (
            <RNIcon
              icon={icon}
              onPress={onSearchIconPress}
              iconStyle={{ tintColor: Colors.Placeholder }}
            />
          )}
          <RNInput
            ref={ref}
            placeholderTextColor={Colors.Placeholder}
            style={styles.input}
            placeholder={'Search here'}
            {...rest}
          />
        </View>
        <RNIcon
          gradient={true}
          icon={Images.Filter}
          onPress={onFilterPress}
          iconStyle={RNStyles.image60}
          containerStyle={styles.iconContainerStyle}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    paddingHorizontal: wp(4),
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.Placeholder,
    ...RNStyles.flexRow,
    borderRadius: wp(3),
    flex: 1,
    paddingHorizontal: wp(3),
  },
  input: {
    flex: 1,
    marginVertical: hp(0.2),
    paddingRight: 0,
  },
  icon: {
    ...RNStyles.icon,
    tintColor: Colors.Black,
  },
  iconContainerStyle: {
    backgroundColor: Colors.Primary1,
    width: wp(11),
    height: wp(11),
    marginLeft: wp(2),
    borderRadius: wp(3),
  },
});

export default HMSearchFilter;

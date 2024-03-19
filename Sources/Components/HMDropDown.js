import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, FontFamily, hp, wp } from '../Theme';
import { RNText } from '../Common';

const HMDropDown = ({
  title,
  data,
  value,
  placeholder,
  maxHeight,
  onChange,
  position,
  containerStyle,
  dropdownStyle,
  dropdownPlaceholderStyle,
  dropDownSelectedTextStyle,
  dropDownIconStyle,
  dropDownItemTextStyle,
  search,
  searchPlaceholder,
  renderInputSearch,
  inputSearchStyle,
  renderLeftIcon,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <RNText color={Colors.DropdownPlaceHolder}>{title}</RNText>}
      {data?.length > 0 && (
        <Dropdown
          style={[styles.dropdownStyle, dropdownStyle]}
          placeholderStyle={[styles.placeholderStyle, dropdownPlaceholderStyle]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            dropDownSelectedTextStyle,
          ]}
          iconStyle={[styles.iconStyle, dropDownIconStyle]}
          activeColor={Colors.PlaceholderBackground}
          itemTextStyle={[styles.itemTextStyle, dropDownItemTextStyle]}
          data={data}
          maxHeight={maxHeight ?? hp(25)}
          labelField="label"
          valueField="value"
          placeholder={placeholder ?? ''}
          value={value}
          onChange={onChange}
          dropdownPosition={position ?? 'auto'}
          search={search}
          searchPlaceholder={searchPlaceholder}
          renderInputSearch={
            renderInputSearch ? v => renderInputSearch?.(v) : null
          }
          inputSearchStyle={[styles.inputSearchStyle, inputSearchStyle]}
          renderLeftIcon={renderLeftIcon}
          {...rest}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1),
  },
  dropdownStyle: {
    backgroundColor: Colors.PlaceholderBackground,
    borderRadius: wp(3),
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.7),
    marginTop: hp(1.5),
  },
  placeholderStyle: {
    color: Colors.Placeholder,
  },
  selectedTextStyle: {
    fontFamily: FontFamily.Medium,
    color: Colors.Black,
  },
  itemTextStyle: {
    fontFamily: FontFamily.Medium,
    color: Colors.Black,
  },
  iconStyle: {
    width: wp(8),
    height: wp(8),
    tintColor: Colors.Black,
  },
  inputSearchStyle: {},
});

export default HMDropDown;

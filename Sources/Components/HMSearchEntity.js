import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNIcon,
  RNImage,
  RNInput,
  RNStyles,
  RNText,
} from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images, Strings } from '../Constants';
import { HMDropDown } from './index';
import { DummyData } from '../Utils';

const HMSearchEntity = () => {
  const [State, setState] = useState({
    entity: null,
    rights: [],
    selectedRights: [],
    closeComponent: false,
  });

  useEffect(() => {
    setState(p => ({
      ...p,
      selectedRights: new Array(State.rights.length).fill(false),
    }));
  }, [State.rights]);

  useEffect(() => {
    setState(p => ({ ...p, rights: DummyData.Rights }));
  }, []);

  const onItemPress = (item, index) => {
    if (item.selectAll) {
      setState(p => ({
        ...p,
        selectedRights: new Array(State.rights.length).fill(true),
      }));
      return;
    }
    const update = State.selectedRights.map((v, i) => (i === index ? !v : v));
    setState(p => ({ ...p, selectedRights: update }));
  };

  if (State.closeComponent) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={RNStyles.flexRowBetween}>
        <RNText family={FontFamily.Medium}>{Strings.SearchEntity}</RNText>
        <RNIcon
          icon={Images.Cross}
          iconStyle={RNStyles.image50}
          onPress={() => setState(p => ({ ...p, closeComponent: true }))}
        />
      </View>

      <HMDropDown
        placeholder={Strings.PleaseSelect}
        data={DummyData.ProductFilterDropDown.Entities}
        dropdownStyle={styles.dropdownStyle}
        renderLeftIcon={() => (
          <RNImage source={Images.Search} style={styles.searchIcon} />
        )}
        onChange={value => setState(p => ({ ...p, entity: value }))}
        value={State.entity}
        search={true}
        renderInputSearch={onChange => (
          <View style={styles.renderInputSearchConatiner}>
            <RNImage source={Images.Search} style={styles.searchIcon} />
            <RNInput
              placeholder={Strings.Searchhere}
              style={styles.input}
              onChangeText={onChange}
            />
          </View>
        )}
      />

      <RNText pVertical={hp(1)} family={FontFamily.Medium}>
        {'HMS AG'}
      </RNText>

      <View style={styles.RightsContainer}>
        <RNText size={FontSize.font14}>{Strings.SelectUserRights}</RNText>
        {State.rights.map((v, i) => {
          const isFirst = i === 0;
          const color = isFirst ? Colors.Button : Colors.Black;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => onItemPress?.(v, i)}
              activeOpacity={0.6}
              style={styles.renderRightContainer}>
              {State.selectedRights[i] ? (
                <RNImage
                  source={Images.CheckboxTrue}
                  style={[styles.icon, { tintColor: color }]}
                />
              ) : (
                <View style={[styles.Box, { borderColor: color }]} />
              )}
              <RNText
                family={isFirst ? FontFamily.Medium : FontFamily.Regular}
                size={FontSize.font14}
                pHorizontal={wp(2)}
                color={color}>
                {v.title}
              </RNText>
            </TouchableOpacity>
          );
        })}
        <RNButton
          title={Strings.Save}
          style={styles.saveButton}
          textStyle={{ fontSize: FontSize.font12 }}
          onPress={() => setState(p => ({ ...p, closeComponent: true }))}
        />
      </View>
    </View>
  );
};

const borderColor = Colors.Black + '80';
const styles = StyleSheet.create({
  container: {
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    backgroundColor: Colors.PlaceholderBackground,
    marginVertical: hp(2),
  },
  dropdownStyle: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Black + '50',
    paddingLeft: wp(3),
  },
  searchIcon: {
    ...RNStyles.icon,
    tintColor: Colors.Black,
    marginRight: wp(2),
  },
  renderInputSearchConatiner: {
    ...RNStyles.flexRow,
    borderWidth: 1,
    borderColor: borderColor,
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    borderRadius: wp(3),
  },
  input: {
    paddingLeft: 0,
    flex: 1,
    marginVertical: 0,
  },
  RightsContainer: {
    backgroundColor: Colors.White,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: wp(3),
  },
  renderRightContainer: {
    ...RNStyles.flexRow,
    paddingTop: hp(1.5),
  },
  Box: {
    width: wp(4),
    height: wp(4),
    borderWidth: 1,
    borderColor: Colors.Black,
    borderRadius: wp(1),
  },
  icon: {
    width: wp(4),
    height: wp(4),
    borderRadius: wp(1),
  },
  saveButton: {
    marginVertical: 0,
    marginTop: hp(2),
    paddingVertical: hp(1.2),
    marginHorizontal: wp(4),
    borderRadius: wp(2),
  },
});

export default HMSearchEntity;

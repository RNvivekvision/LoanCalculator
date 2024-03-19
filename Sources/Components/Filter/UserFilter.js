import React, { forwardRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles } from '../../Common';
import { Strings } from '../../Constants';
import { HMDropDown, HMFilterTitle } from '../index';
import { DummyData } from '../../Utils';
import { hp, wp } from '../../Theme';

const UserFilter = forwardRef(({}, ref) => {
  const [State, setState] = useState({
    userRight: null,
    entities: null,
    shortName: null,
    userName: null,
  });

  const closeSheet = () => ref.current.close();

  return (
    <View style={RNStyles.container}>
      <HMFilterTitle title={Strings.Filter} onClosePress={closeSheet} />

      <View style={styles.dropdownContainer}>
        <HMDropDown
          title={Strings.UserRights}
          data={DummyData.ProductFilterDropDown.UserRights}
          placeholder={Strings.PleaseSelect}
          onChange={value => setState(p => ({ ...p, userRight: value }))}
          value={State.userRight}
        />
        <HMDropDown
          title={Strings.Entities}
          data={DummyData.ProductFilterDropDown.Entities}
          placeholder={Strings.PleaseSelect}
          onChange={value => setState(p => ({ ...p, entities: value }))}
          value={State.entities}
        />
        <HMDropDown
          title={Strings.ShortName}
          data={DummyData.ProductFilterDropDown.ShortName}
          placeholder={Strings.PleaseSelect}
          onChange={value => setState(p => ({ ...p, shortName: value }))}
          value={State.shortName}
        />
        <HMDropDown
          title={Strings.UserName}
          data={DummyData.ProductFilterDropDown.UserName}
          placeholder={Strings.PleaseSelect}
          position={'top'}
          onChange={value => setState(p => ({ ...p, userName: value }))}
          value={State.userName}
        />
      </View>

      <RNButton
        title={Strings.Apply}
        style={styles.button}
        onPress={closeSheet}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  button: {
    marginHorizontal: wp(4),
    marginVertical: hp(3),
  },
  dropdownContainer: {
    paddingHorizontal: wp(4),
  },
});

export default UserFilter;

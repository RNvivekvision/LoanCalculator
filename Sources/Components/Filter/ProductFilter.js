import React, { forwardRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles } from '../../Common';
import { HMDropDown, HMFilterTitle } from '../index';
import { DummyData } from '../../Utils';
import { hp, wp } from '../../Theme';
import { Strings } from '../../Constants';

const ProductFilter = forwardRef(({}, ref) => {
  const [State, setState] = useState({
    partner: null,
    specType: null,
    country: null,
  });

  const closeSheet = () => ref.current.close();

  return (
    <View style={RNStyles.container}>
      <HMFilterTitle title={Strings.Filter} onClosePress={closeSheet} />

      <View style={styles.dropdownContainer}>
        <HMDropDown
          title={Strings.Partner}
          data={DummyData.ProductFilterDropDown.UserRights}
          placeholder={Strings.PleaseSelect}
          onChange={value => setState(p => ({ ...p, partner: value }))}
          value={State.partner}
        />
        <HMDropDown
          title={Strings.SpecType}
          data={DummyData.ProductFilterDropDown.Entities}
          placeholder={Strings.PleaseSelect}
          onChange={value => setState(p => ({ ...p, specType: value }))}
          value={State.specType}
        />
        <HMDropDown
          title={Strings.Country}
          data={DummyData.ProductFilterDropDown.ShortName}
          placeholder={Strings.PleaseSelect}
          position={'top'}
          onChange={value => setState(p => ({ ...p, country: value }))}
          value={State.country}
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

export default ProductFilter;

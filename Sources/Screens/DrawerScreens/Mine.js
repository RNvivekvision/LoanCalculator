import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles, RNText } from '../../Common';
import { HMHeader, HMList, HMSearchFilter } from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Mine = ({ navigation }) => {
  const ref = useRef();

  return (
    <View style={RNStyles.container}>
      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{Strings.MinePitList}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <HMList
          title={Strings.LatestMinePitsList}
          data={DummyData.Business.LatestBusinessList}
          viewText={Strings.ViewMine}
          onViewProfilePress={() => navigation.navigate(NavRoutes.MineDetail)}
        />

        <HMList
          title={Strings.AllProductList}
          titleChildrenText={Strings.AllProduct}
          data={Functions.spliteArray(DummyData.Business.AllBusinessList)}
          vStack={true}
          viewText={Strings.ViewMine}
          onViewProfilePress={() => navigation.navigate(NavRoutes.MineDetail)}
        />
      </HMHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font20,
    fontFamily: FontFamily.SemiBold,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
});

export default Mine;

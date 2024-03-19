import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNStyles, RNText } from '../../Common';
import {
  HMHeader,
  HMList,
  HMSearchFilter,
  BusinessFilter,
} from '../../Components';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Business = ({ navigation }) => {
  const ref = useRef();

  return (
    <View style={RNStyles.container}>
      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{Strings.BusinessList}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <HMList
          data={DummyData.Business.LatestBusinessList}
          title={Strings.LatestBusinessList}
          viewText={Strings.ViewBusiness}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.BusinessDetail)
          }
        />

        <HMList
          data={Functions.spliteArray(DummyData.Business.AllBusinessList)}
          vStack={true}
          viewText={Strings.ViewBusiness}
          title={Strings.AllBusinessList}
          titleChildrenText={Strings.AllBusiness}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.BusinessDetail)
          }
        />
      </HMHeader>

      <RNBottomSheet snapPoints={['50%']} ref={ref}>
        <BusinessFilter ref={ref} />
      </RNBottomSheet>
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

export default Business;

import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNBottomSheet, RNButton, RNStyles, RNText } from '../../Common';
import {
  HMHeader,
  HMList,
  HMSearchFilter,
  ProductFilter,
} from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Products = ({ navigation }) => {
  const ref = useRef();

  return (
    <View style={RNStyles.container}>
      <HMHeader
        onUserIconPress={() => navigation.navigate(NavRoutes.UserProfile)}>
        <RNText style={styles.title}>{Strings.Productlist}</RNText>

        <HMSearchFilter onFilterPress={() => ref.current?.present()} />

        <RNButton
          title={Strings.MinePit}
          style={styles.minePitButton}
          textStyle={{ fontSize: FontSize.font12 }}
        />

        <HMList
          title={Strings.LatestProductList}
          data={DummyData.Business.LatestBusinessList}
          viewText={Strings.ViewProduct}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.ProductDetail)
          }
        />

        <HMList
          vStack={true}
          title={Strings.AllProductList}
          titleChildrenText={Strings.AllProduct}
          data={Functions.spliteArray(DummyData.Business.AllBusinessList)}
          viewText={Strings.ViewProduct}
          onViewProfilePress={() =>
            navigation.navigate(NavRoutes.ProductDetail)
          }
        />
      </HMHeader>

      <RNBottomSheet snapPoints={['65%']} ref={ref}>
        <ProductFilter ref={ref} />
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
  minePitButton: {
    backgroundColor: Colors.Primary2,
    marginHorizontal: wp(4),
    paddingVertical: hp(1),
    marginTop: hp(2),
    borderRadius: wp(2),
  },
});

export default Products;

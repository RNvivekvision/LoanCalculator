import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNIcon, RNText, RNStyles } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

const HMProduct = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Row title={'No : '} text={item.no} />
        <Row title={'Short Name : '} text={item.shortName} />
        <Row title={'Partner : '} text={item.partner} />
        <Row title={'Spec. Type : '} text={item.specType} />
        <Row title={'Country : '} text={item.country} />
      </View>

      <View style={styles.renderButton}>
        <RNIcon
          icon={Images.Edit}
          iconStyle={RNStyles.image60}
          containerStyle={styles.iconContainer}
        />
        <RNIcon
          icon={Images.Delete}
          iconStyle={RNStyles.image60}
          containerStyle={[
            styles.iconContainer,
            { backgroundColor: Colors.Delete + '15' },
          ]}
        />
        <RNIcon
          icon={Images.CopyProduct}
          iconStyle={RNStyles.image60}
          containerStyle={[
            styles.iconContainer,
            { backgroundColor: Colors.Black + '20' },
          ]}
        />
      </View>
    </View>
  );
};

const Row = ({ title, text }) => {
  return (
    <View style={styles.rowContainer}>
      <RNText size={FontSize.font12} color={Colors.Placeholder}>
        {title}
      </RNText>
      <RNText
        numOfLines={1}
        style={{ flex: 1 }}
        size={FontSize.font12}
        family={FontFamily.SemiBold}>
        {text}
      </RNText>
    </View>
  );
};

const radius = wp(3);
const borderColor = Colors.Black + '40';
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRowBetween,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: radius,
    marginBottom: hp(2),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },
  renderButton: {
    paddingHorizontal: wp(2),
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: Colors.Edit + '15',
    marginVertical: hp(0.5),
  },
  rowContainer: {
    ...RNStyles.flexRow,
    paddingVertical: hp(0.5),
    paddingLeft: wp(2),
  },
});

export default HMProduct;

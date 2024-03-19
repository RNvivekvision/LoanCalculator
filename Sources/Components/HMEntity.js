import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNIcon, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

const HMEntity = ({ data, title, containerStyle }) => {
  return (
    <View style={[styles.entityContainer, containerStyle]}>
      {title && (
        <View style={styles.entityTitleContainer}>
          <RNText family={FontFamily.SemiBold}>{title || ''}</RNText>
        </View>
      )}
      {data?.length > 0 &&
        data.map((v, i) => (
          <View key={i} style={styles.renderEntityContainer}>
            <View style={RNStyles.container}>
              <RNText family={FontFamily.Medium}>{v.title}</RNText>
              <RNText style={styles.renderEntityText}>{v.text}</RNText>
            </View>
            <View style={RNStyles.flexRow}>
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
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  entityContainer: {
    borderWidth: 1,
    borderColor: Colors.Black + '40',
    borderRadius: wp(4),
    marginVertical: hp(1),
  },
  entityTitleContainer: {
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    backgroundColor: Colors.PlaceholderBackground,
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  renderEntityContainer: {
    ...RNStyles.flexRow,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  iconContainer: {
    width: wp(8),
    height: wp(8),
    borderRadius: 100,
    backgroundColor: Colors.Edit + '15',
    marginHorizontal: wp(1.5),
  },
  renderEntityText: {
    fontSize: FontSize.font12,
    color: Colors.Black + '99',
    paddingTop: hp(0.5),
  },
});

export default HMEntity;

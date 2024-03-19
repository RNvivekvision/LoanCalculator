import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { RNButton, RNIcon, RNImage, RNStyles, RNText } from '../Common';
import { Images, Strings } from '../Constants';

const VStack = ({
  item,
  viewText,
  onViewProfilePress,
  onEditPress,
  onDeletePress,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.renderContainer}>
      {item.profilePic && (
        <View style={styles.profilePicContainer}>
          {item?.isLive && <View style={styles.live} />}
          <RNImage source={item.profilePic} style={styles.profilePic} />
        </View>
      )}
      <RNText style={styles.name}>{item.name}</RNText>
      <View style={RNStyles.flexRow}>
        <RNText size={FontSize.font8}>{item.number}</RNText>
        <RNIcon icon={Images.Copy} containerStyle={styles.copyIcon} />
      </View>
      {/* <RNText size={FontSize.font8}>{item.number}</RNText> */}
      <RNButton
        title={viewText || Strings.ViewProfile}
        textStyle={{ fontSize: FontSize.font10 }}
        style={styles.viewProfile}
        onPress={onViewProfilePress}
      />
      <View style={RNStyles.flexRow}>
        <RNIcon
          icon={Images.Edit}
          iconStyle={RNStyles.image60}
          containerStyle={styles.iconContainer}
          onPress={onEditPress}
        />
        <RNIcon
          icon={Images.Delete}
          iconStyle={RNStyles.image60}
          containerStyle={[
            styles.iconContainer,
            { backgroundColor: Colors.Delete + '15' },
          ]}
          onPress={onDeletePress}
        />
      </View>
    </View>
  );
};

const useStyles = () => {
  return StyleSheet.create({
    renderContainer: {
      ...RNStyles.shadow,
      width: wp(44),
      marginRight: wp(3),
      paddingHorizontal: wp(2),
      borderRadius: wp(4),
      backgroundColor: Colors.White,
      marginTop: hp(1),
      marginBottom: hp(0.5),
      borderWidth: 1,
      borderColor: Colors.Primary2 + '20',
      alignItems: 'center',
      paddingVertical: hp(1.5),
    },
    name: {
      fontSize: FontSize.font12,
      fontFamily: FontFamily.SemiBold,
      paddingBottom: hp(0.5),
      textAlign: 'center',
      width: '100%',
      paddingTop: hp(0.5),
    },
    profilePicContainer: {
      width: wp(13),
      height: wp(13),
      borderWidth: 1,
      borderRadius: 100,
      borderColor: Colors.Black + '30',
    },
    live: {
      width: wp(4),
      height: wp(4),
      backgroundColor: Colors.Live,
      position: 'absolute',
      zIndex: 1,
      borderRadius: 100,
      top: -2,
      right: -2,
      borderWidth: 2,
      borderColor: Colors.White,
    },
    profilePic: {
      ...RNStyles.image100,
      borderRadius: 100,
    },
    iconContainer: {
      width: wp(8),
      height: wp(8),
      borderRadius: 100,
      backgroundColor: Colors.Edit + '15',
      marginHorizontal: wp(2),
    },
    viewProfile: {
      paddingHorizontal: wp(2),
      paddingVertical: hp(0.8),
      borderRadius: wp(2),
    },
    copyIcon: {
      width: wp(3),
      height: wp(3),
    },
  });
};

export default VStack;

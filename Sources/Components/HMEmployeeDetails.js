import React, { useState } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { RNIcon, RNText, RNStyles } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const HMEmployeeDetails = ({ item }) => {
  const [State, setState] = useState({ isOpened: true });
  const styles = useStyles({ ...State });
  const onTitlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setState(p => ({ ...p, isOpened: !p.isOpened }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onTitlePress}
        style={styles.titleContainer}>
        <RNText
          family={FontFamily.SemiBold}
          size={FontSize.font12}
          color={Colors.White}>
          {item.title}
        </RNText>
        <RNIcon
          icon={Images.ArrowUp}
          onPress={onTitlePress}
          iconStyle={styles.arrowUp}
        />
      </TouchableOpacity>

      {State.isOpened && (
        <View style={styles.content}>
          {item.data?.map((v, i) => {
            const isLast = i === item.data.length - 1;
            const styl = useStyles({ isLast });
            return (
              <View key={i} style={styl.renderContainer}>
                <View style={styl.renderContent}>
                  <Row title={'ID : '} text={v.id} />
                  <Row title={'Partner : '} text={v.partner} />
                  <Row title={'Quantity : '} text={v.quantity} />
                  <Row title={'Price : '} text={v.price} />
                  <Row title={'Delivery : '} text={v.delivery} />
                </View>

                <View style={styl.renderButton}>
                  <RNIcon
                    icon={Images.Edit}
                    iconStyle={RNStyles.image60}
                    containerStyle={styl.iconContainer}
                  />
                  <RNIcon
                    icon={Images.Delete}
                    iconStyle={RNStyles.image60}
                    containerStyle={[
                      styl.iconContainer,
                      { backgroundColor: Colors.Delete + '15' },
                    ]}
                  />
                  <RNIcon
                    icon={Images.Printer}
                    iconStyle={RNStyles.image60}
                    containerStyle={[
                      styl.iconContainer,
                      { backgroundColor: Colors.Button + '15' },
                    ]}
                  />
                  <RNIcon
                    icon={Images.Copy}
                    iconStyle={RNStyles.image60}
                    containerStyle={[
                      styl.iconContainer,
                      { backgroundColor: Colors.Black + '20' },
                    ]}
                  />
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

const Row = ({ title, text }) => {
  const styles = useStyles({});
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
const useStyles = ({ isOpened, isLast }) => {
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: radius,
      marginBottom: hp(2),
    },
    titleContainer: {
      ...RNStyles.flexRowBetween,
      paddingVertical: hp(1),
      paddingHorizontal: wp(4),
      backgroundColor: Colors.Button,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      borderRadius: isOpened ? 0 : radius,
    },
    arrowUp: {
      ...RNStyles.image70,
      transform: [{ rotate: isOpened ? '0deg' : '180deg' }],
    },
    renderContainer: {
      ...RNStyles.flexRow,
      marginHorizontal: wp(5),
      paddingVertical: hp(1.5),
      borderBottomWidth: isLast ? 0 : 1,
      borderBlockColor: borderColor,
    },
    renderContent: {
      flex: 1,
    },
    renderButton: {
      paddingHorizontal: wp(3),
      borderLeftWidth: 1,
      borderLeftColor: borderColor,
    },
    iconContainer: {
      ...RNStyles.icon,
      borderRadius: 100,
      backgroundColor: Colors.Edit + '15',
      marginVertical: hp(0.5),
    },
    rowContainer: {
      ...RNStyles.flexRow,
      paddingVertical: hp(0.5),
    },
  });
};

export default HMEmployeeDetails;

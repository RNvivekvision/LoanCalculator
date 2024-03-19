import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNText, RNStyles, RNImage } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Strings } from '../Constants';

const HMEmployee = ({ item }) => {
  const is9Plus = item?.data?.length > 9;
  const data = is9Plus ? item?.data?.slice(0, 9) : item?.data;
  return (
    <View style={styles.container}>
      <RNText style={styles.title}>{item.title}</RNText>
      <View style={styles.content}>
        {data?.map((v, i) => {
          const bgcolor = v?.isDark
            ? Colors.Button
            : Colors.PlaceholderBackground;
          const color = v?.isDark ? Colors.White : Colors.Black;
          return (
            <View key={i} style={styles.renderContainer(bgcolor)}>
              {v?.title && (
                <RNText
                  color={color}
                  family={FontFamily.SemiBold}
                  size={FontSize.font12}>
                  {v?.title}
                </RNText>
              )}
              {v?.pic && <RNImage source={v?.pic} style={styles.renderPic} />}
            </View>
          );
        })}
        <TouchableOpacity style={styles.viewAll}>
          <RNText style={styles.viewAllText}>{Strings.ViewAll}</RNText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const employeeSize = wp(12);
const styles = StyleSheet.create({
  container: {
    width: wp(50),
  },
  content: {
    ...RNStyles.flexWrapHorizontal,
    borderRightWidth: 1,
    borderRightColor: Colors.Black + '20',
    paddingHorizontal: wp(2),
  },
  title: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    fontFamily: FontFamily.Medium,
  },
  renderContainer: bgcolor => ({
    ...RNStyles.center,
    width: employeeSize,
    marginHorizontal: wp(1),
    marginVertical: hp(0.7),
    height: employeeSize,
    borderRadius: 100,
    backgroundColor: bgcolor,
  }),
  renderPic: {
    borderRadius: 100,
  },
  viewAll: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  viewAllText: {
    fontSize: FontSize.font12,
    color: Colors.Button,
    textDecorationLine: 'underline',
  },
});

export default HMEmployee;

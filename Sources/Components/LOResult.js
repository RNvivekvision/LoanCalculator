import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles, RNImage } from '../Common';
import { Colors, FontFamily, hp, wp } from '../Theme';

const LOResult = ({
  title,
  value,
  containerStyle,
  titleStyle,
  valueStyle,
  needBGColor,
  icon,
  columns,
}) => {
  const conStyle = {
    backgroundColor: needBGColor ? Colors.White + '10' : Colors.Transparent,
    ...containerStyle,
  };

  if (columns?.length > 0) {
    return (
      <View style={styles.renderContainer}>
        {columns.map((v, i) => (
          <View key={i} style={styles.renderRows}>
            <RNText style={[styles.title, titleStyle]}>{v.title}</RNText>
            <RNText style={[styles.value, valueStyle]}>{v.value}</RNText>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={[styles.container, conStyle]}>
      <RNText style={[styles.title, titleStyle]}>{title}</RNText>
      <View style={RNStyles.flexRow}>
        <RNText style={[styles.value, valueStyle]}>{value}</RNText>
        {icon && <RNImage source={icon} style={styles.icon} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    backgroundColor: Colors.White + '10',
    paddingVertical: hp(2),
    borderRadius: wp(3),
    marginBottom: hp(2),
  },
  title: {
    fontFamily: FontFamily.Medium,
    paddingBottom: hp(1),
  },
  value: {
    fontFamily: FontFamily.Medium,
    color: Colors.Button,
  },
  icon: {
    width: wp(7),
    height: wp(7),
    marginHorizontal: wp(1),
  },
  renderRows: {
    flex: 1,
    ...RNStyles.center,
  },
  renderContainer: {
    ...RNStyles.flexRow,
    paddingBottom: hp(2),
  },
});

export default LOResult;

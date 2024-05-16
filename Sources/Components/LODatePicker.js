import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../Common';
import { Images, Strings } from '../Constants';
import { Functions } from '../Utils';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import DatePicker from 'react-native-date-picker';

const LODatePicker = ({ onDateChange }) => {
  const [State, setState] = useState({
    date: new Date(),
    openDatePicker: false,
  });

  useEffect(() => {
    onDateChange?.(State.date);
  }, [State.date]);

  return (
    <TouchableOpacity
      onPress={() => setState(p => ({ ...p, openDatePicker: true }))}
      activeOpacity={0.6}
      style={styles.container}>
      <View style={RNStyles.flexRow}>
        <RNText style={styles.text}>{Strings.FirstEMI}</RNText>
        <RNText style={styles.text}>
          {Functions.formatDate({ date: State.date })}
        </RNText>
      </View>
      <RNImage source={Images.Calendar} style={styles.icon} />
      <DatePicker
        modal={true}
        open={State.openDatePicker}
        date={State.date}
        mode={'date'}
        onConfirm={date =>
          setState(p => ({ ...p, openDatePicker: false, date: date }))
        }
        onCancel={() => {
          setState(p => ({ ...p, openDatePicker: false }));
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRowBetween,
    backgroundColor: Colors.White + '10',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(3),
  },
  text: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
  icon: {
    width: wp(6),
    height: wp(6),
  },
});

export default LODatePicker;

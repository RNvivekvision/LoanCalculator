import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { wp, Colors, FontFamily, hp } from '../../Theme';
import { Images } from '../../Constants';
import Reanimated, { FadeInDown } from 'react-native-reanimated';

const RenderLanguages = ({ item, index, selected, onPress }) => {
  const styles = useStyles({ selected });
  return (
    <Reanimated.View
      entering={FadeInDown.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress?.(item)}
        style={styles.card}>
        <View style={RNStyles.flexRow}>
          <RNImage source={item.image} style={styles.image} />
          <RNText style={styles.title}>{item.title}</RNText>
        </View>
        <View style={styles.radio}>
          {selected && (
            <RNImage source={Images.True} style={RNStyles.image70} />
          )}
        </View>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const imageSize = wp(12);
const radioSize = wp(6);
const useStyles = ({ selected }) => {
  return StyleSheet.create({
    container: {
      marginTop: hp(0.5),
    },
    card: {
      ...RNStyles.flexRowBetween,
      paddingVertical: hp(1),
    },
    image: {
      width: imageSize,
      height: imageSize,
    },
    title: {
      paddingHorizontal: wp(4),
      fontFamily: FontFamily.Medium,
      color: selected ? Colors.Button : Colors.White,
    },
    radio: {
      ...RNStyles.center,
      width: radioSize,
      height: radioSize,
      borderRadius: 100,
      borderWidth: selected ? 0 : 1,
      borderColor: Colors.White,
      backgroundColor: selected ? Colors.Button : Colors.Transparent,
    },
  });
};

export default RenderLanguages;

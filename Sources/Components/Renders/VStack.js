import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { useNavigation } from '@react-navigation/native';
import Reanimated, {
  Easing,
  ZoomIn,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const VStack = ({ item, index }) => {
  const scale = useSharedValue(1);
  const navigation = useNavigation();

  const onPress = () => {
    if (scale.value !== 1) return;

    navigation.navigate(item.navigate);
  };

  const onPressIn = () => {
    scale.value = withTiming(1.3, {
      duration: 1500,
      easing: Easing.bezier(0.2, 0.8, 0, 1),
    });
  };

  const onPressOut = () => {
    scale.value = withTiming(1);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, []);

  return (
    <Reanimated.View
      entering={ZoomIn.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        // onPressIn={onPressIn}
        // onPressOut={onPressOut}
        activeOpacity={0.6}
        style={styles.card}>
        <View style={styles.image}>
          <RNImage source={item.image} style={RNStyles.image70} />
        </View>
        <RNText style={styles.title}>{item.title}</RNText>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const iconSize = wp(12);
const styles = StyleSheet.create({
  container: {
    width: wp(27),
    height: wp(30),
    marginBottom: hp(2),
    marginHorizontal: wp(1.7),
    borderRadius: wp(3),
    backgroundColor: Colors.White + '15',
  },
  card: {
    ...RNStyles.center,
    flex: 1,
    borderRadius: wp(3),
    paddingHorizontal: wp(2),
  },
  image: {
    ...RNStyles.center,
    width: iconSize,
    height: iconSize,
    backgroundColor: Colors.Button,
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    paddingTop: hp(1.5),
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
});

export default VStack;

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import Reanimated, { ZoomIn } from 'react-native-reanimated';

const VStack = ({ item, index, onPress }) => {
  return (
    <Reanimated.View
      entering={ZoomIn.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress?.(item)}
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

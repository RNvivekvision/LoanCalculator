import { TransitionPresets } from '@react-navigation/stack';
import { Colors } from '../Theme';
const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
const drawerOptions = {
  ...screenOptions,
  drawerType: 'front',
  overlayColor: Colors.White + '80',
  drawerStyle: {
    backgroundColor: Colors.Transparent,
    width: '80%',
  },
};
const NavConfigs = {
  screenOptions,
  drawerOptions,
};
export default NavConfigs;

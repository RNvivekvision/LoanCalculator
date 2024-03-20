import { TransitionPresets } from '@react-navigation/stack';
const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
const drawerOptions = {
  ...screenOptions,
  drawerType: 'front',
  drawerStyle: {
    width: '75%',
  },
};
const NavConfigs = {
  screenOptions,
  drawerOptions,
};
export default NavConfigs;
